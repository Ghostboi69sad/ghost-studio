import { auth, database } from './config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendEmailVerification,
  updateEmail,
  updatePassword,
  User
} from 'firebase/auth';
import { ref, set } from 'firebase/database';

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