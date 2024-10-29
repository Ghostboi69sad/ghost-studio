import { database } from './config';
import { ref, set } from 'firebase/database';

export const setUserAsAdmin = async (userId: string) => {
  try {
    await set(ref(database, `users/${userId}/role`), 'admin');
    console.log('User set as admin successfully');
  } catch (error) {
    console.error('Error setting user as admin:', error);
  }
}; 