import { initializeApp, getApps } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  User, 
  sendEmailVerification, 
  updateEmail, 
  updatePassword 
} from 'firebase/auth';
import { getDatabase, ref, set, get, onValue } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// تجنب التهيئة المزدوجة
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

// وظائف المصادقة
export const signUp = async (email: string, password: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await sendEmailVerification(user);
  await set(ref(database, `users/${user.uid}/email`), email);
  return user;
};

export const signIn = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  if (!user.emailVerified) {
    throw new Error('Please verify your email before logging in.');
  }
  return user;
};

export const signOutUser = async (): Promise<void> => {
  await signOut(auth);
};

// وظائف الاشتراك
export const checkSubscriptionStatus = (userId: string, callback: (isActive: boolean) => void): (() => void) => {
  const userSubscriptionRef = ref(database, `users/${userId}/subscription`);
  const unsubscribe = onValue(userSubscriptionRef, (snapshot) => {
    const subscriptionData = snapshot.val();
    const isActive = subscriptionData && subscriptionData.status === 'active';
    callback(isActive);
  });
  return unsubscribe;
};

export const setManualSubscription = async (userId: string, isActive: boolean, endDate: Date) => {
  await set(ref(database, `users/${userId}/subscription`), {
    status: isActive ? 'active' : 'inactive',
    endDate: endDate.toISOString(),
  });
};

// وظائف المستخدم
export const isUserAdmin = async (userId: string): Promise<boolean> => {
  const userRef = ref(database, `users/${userId}`);
  const snapshot = await get(userRef);
  return snapshot.val()?.role === 'admin';
};

export const resendVerificationEmail = async (user: User): Promise<void> => {
  await sendEmailVerification(user);
};

export const updateUserEmail = async (user: User, newEmail: string): Promise<void> => {
  await updateEmail(user, newEmail);
};

export const updateUserPassword = async (user: User, newPassword: string): Promise<void> => {
  await updatePassword(user, newPassword);
};

export const updateUserProfile = async (userId: string, username: string, profileImage: string): Promise<void> => {
  await set(ref(database, `users/${userId}`), {
    username,
    profileImage
  });
};

export default app; 