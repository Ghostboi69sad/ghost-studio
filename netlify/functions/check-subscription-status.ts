import { Handler } from '@netlify/functions';
import { getDatabase, ref, get } from 'firebase/database';
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

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { userId } = JSON.parse(event.body || '{}');

  if (!userId) {
    return { 
      statusCode: 400, 
      body: JSON.stringify({ error: 'User ID is required' })
    };
  }

  try {
    const userRef = ref(db, `users/${userId}/subscription`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Subscription not found' }),
      };
    }

    const subscriptionData = snapshot.val();
    const isActive = subscriptionData.active && subscriptionData.expirationDate > Date.now();

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        hasActiveSubscription: isActive,
        subscriptionType: subscriptionData.planType,
        expirationDate: new Date(subscriptionData.expirationDate).toISOString()
      }),
    };
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to check subscription status', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};
