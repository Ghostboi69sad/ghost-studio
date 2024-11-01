"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const stripe_1 = require("stripe");
const stripe = new stripe_1.Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-09-30.acacia',
});
const handler = async (event) => {
    console.log('Verify purchase function started');
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    try {
        const { sessionId } = JSON.parse(event.body || '{}');
        console.log('Received request with sessionId:', sessionId);
        if (!sessionId) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Session ID is required' })
            };
        }
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        console.log('Retrieved session:', session.id);
        const isPurchaseValid = session.payment_status === 'paid';
        return {
            statusCode: 200,
            body: JSON.stringify({
                isPurchaseValid,
                paymentStatus: session.payment_status,
                mode: session.mode
            }),
        };
    }
    catch (error) {
        console.error('Detailed error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to verify purchase',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
        };
    }
};
exports.handler = handler;
