import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { getDatabase, ref, set, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-09-30.acacia'
});

interface UserSubscriptionData {
  subscription?: {
    stripeCustomerId: string;
    status: string;
    planId: string;
    currentPeriodEnd: string;
    stripeSubscriptionId: string;
  };
}

async function updateSubscriptionInFirebase(
  userId: string, 
  subscriptionData: Partial<UserSubscriptionData['subscription']>
) {
  const userRef = ref(db, `users/${userId}/subscription`);
  await set(userRef, {
    ...subscriptionData,
    updatedAt: new Date().toISOString()
  });
}

async function getUserIdFromCustomerId(customerId: string): Promise<string | null> {
  try {
    const usersRef = ref(db, 'users');
    const snapshot = await get(usersRef);
    
    if (snapshot.exists()) {
      const users = snapshot.val() as Record<string, UserSubscriptionData>;
      for (const [userId, userData] of Object.entries(users)) {
        if (userData.subscription?.stripeCustomerId === customerId) {
          return userId;
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting userId:', error);
    return null;
  }
}

export const handler: Handler = async (event) => {
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

  let stripeEvent: Stripe.Event;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body || '', sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: 'Webhook signature verification failed',
        details: err instanceof Error ? err.message : 'Unknown Error'
      })
    };
  }

  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed': {
        const session = stripeEvent.data.object as Stripe.Checkout.Session;
        if (!session.client_reference_id) break;

        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        await updateSubscriptionInFirebase(session.client_reference_id, {
          status: 'active',
          stripeCustomerId: session.customer as string,
          stripeSubscriptionId: subscription.id,
          planId: subscription.items.data[0].price.id,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString()
        });
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = stripeEvent.data.object as Stripe.Subscription;
        const userId = await getUserIdFromCustomerId(subscription.customer as string);
        
        if (userId) {
          await updateSubscriptionInFirebase(userId, {
            status: subscription.status,
            currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString()
          });
        }
        break;
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    };
  } catch (error) {
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

