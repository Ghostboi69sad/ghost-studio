import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const userId = 'MsQpxp1XaARXi0GvA5ceRC78kGl1'; // استبدل هذا بمعرف المستخدم الفعلي

async function setUserAsAdmin(userId: string) {
  try {
    await set(ref(db, `users/${userId}/role`), 'admin');
    console.log('User set as admin successfully');
  } catch (error) {
    console.error('Error setting user as admin:', error);
  }
}

setUserAsAdmin(userId);
