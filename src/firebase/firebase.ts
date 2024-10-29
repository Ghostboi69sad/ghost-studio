// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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
import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  onValue 
} from 'firebase/database';
import { 
  getStorage, 
  ref as storageRef, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Authentication functions
export const signUp = async (email: string, password: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await sendEmailVerification(user);
  await set(ref(db, `users/${user.uid}/email`), email);
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

// Database functions
export const checkSubscriptionStatus = (userId: string, callback: (isActive: boolean) => void): (() => void) => {
  const userSubscriptionRef = ref(db, `users/${userId}/subscription`);
  return onValue(userSubscriptionRef, (snapshot) => {
    const subscriptionData = snapshot.val();
    const isActive = subscriptionData && subscriptionData.status === 'active';
    callback(isActive);
  });
};

export const setManualSubscription = async (userId: string, isActive: boolean, endDate: Date) => {
  await set(ref(db, `users/${userId}/subscription`), {
    status: isActive ? 'active' : 'inactive',
    endDate: endDate.toISOString(),
  });
};

export const isUserAdmin = async (userId: string): Promise<boolean> => {
  const userRef = ref(db, `users/${userId}`);
  const snapshot = await get(userRef);
  return snapshot.val()?.role === 'admin';
};

// User management functions
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
  await set(ref(db, `users/${userId}`), {
    username,
    profileImage
  });
};

// Storage functions
export const uploadProfilePicture = async (userId: string, file: File): Promise<string> => {
  const imageRef = storageRef(storage, `profile-pictures/${userId}`);
  await uploadBytes(imageRef, file);
  const downloadURL = await getDownloadURL(imageRef);
  await set(ref(db, `users/${userId}/profileImage`), downloadURL);
  return downloadURL;
};

export { app, auth, db, storage };
