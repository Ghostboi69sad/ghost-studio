"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const stripe_1 = __importDefault(require("stripe"));
const database_1 = require("firebase/database");
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
    databaseURL: process.env.VITE_FIREBASE_DATABASE_URL
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, database_1.getDatabase)(app);
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-09-30.acacia',
});
const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    const sig = event.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!sig || !webhookSecret) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing stripe signature or webhook secret' })
        };
    }
    let stripeEvent;
    try {
        stripeEvent = stripe.webhooks.constructEvent(event.body || '', sig, webhookSecret);
    }
    catch (err) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${err instanceof Error ? err.message : 'Unknown Error'}`
        };
    }
    try {
        switch (stripeEvent.type) {
            case 'checkout.session.completed': {
                const session = stripeEvent.data.object;
                const userId = session.client_reference_id;
                const customerId = session.customer;
                const subscriptionId = session.subscription;
                if (userId) {
                    // Get subscription details
                    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
                    const planId = subscription.items.data[0].price.id;
                    const currentPeriodEnd = new Date(subscription.current_period_end * 1000);
                    // Update Firebase
                    const userRef = (0, database_1.ref)(db, `users/${userId}/subscription`);
                    await (0, database_1.set)(userRef, {
                        status: 'active',
                        planId,
                        stripeCustomerId: customerId,
                        stripeSubscriptionId: subscriptionId,
                        currentPeriodEnd: currentPeriodEnd.toISOString(),
                        createdAt: new Date().toISOString()
                    });
                }
                break;
            }
            case 'customer.subscription.updated': {
                const subscription = stripeEvent.data.object;
                const userId = await getUserIdFromCustomerId(subscription.customer);
                if (userId) {
                    const userRef = (0, database_1.ref)(db, `users/${userId}/subscription`);
                    await (0, database_1.set)(userRef, {
                        status: subscription.status,
                        currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString(),
                        updatedAt: new Date().toISOString()
                    });
                }
                break;
            }
            case 'customer.subscription.deleted': {
                const subscription = stripeEvent.data.object;
                const userId = await getUserIdFromCustomerId(subscription.customer);
                if (userId) {
                    const userRef = (0, database_1.ref)(db, `users/${userId}/subscription`);
                    await (0, database_1.set)(userRef, {
                        status: 'canceled',
                        canceledAt: new Date().toISOString()
                    });
                }
                break;
            }
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ received: true })
        };
    }
    catch (error) {
        console.error('Error processing webhook:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to process webhook',
                details: error instanceof Error ? error.message : 'Unknown error'
            })
        };
    }
};
exports.handler = handler;
async function getUserIdFromCustomerId(customerId) {
    var _a;
    try {
        const usersRef = (0, database_1.ref)(db, 'users');
        const snapshot = await (0, database_1.get)(usersRef);
        if (snapshot.exists()) {
            const users = snapshot.val();
            for (const [userId, userData] of Object.entries(users)) {
                if (((_a = userData.subscription) === null || _a === void 0 ? void 0 : _a.stripeCustomerId) === customerId) {
                    return userId;
                }
            }
        }
        return null;
    }
    catch (error) {
        console.error('Error getting userId:', error);
        return null;
    }
}
