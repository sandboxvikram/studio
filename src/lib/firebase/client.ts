import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth, connectAuthEmulator} from 'firebase/auth';
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore';

import {firebaseConfig} from './config';

/**
 * Initializes the Firebase app if it hasn't been already.
 */
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_EMULATORS_ENABLED === 'true') {
  const host = process.env.NEXT_PUBLIC_EMULATOR_HOST || '127.0.0.1';
  const authPort =
    parseInt(process.env.NEXT_PUBLIC_AUTH_EMULATOR_PORT || '9099') || 9099;
  const firestorePort =
    parseInt(process.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_PORT || '8080') || 8080;

  console.log(`Connecting to emulators at ${host}`);
  connectAuthEmulator(auth, `http://${host}:${authPort}`);
  connectFirestoreEmulator(db, host, firestorePort);
}
