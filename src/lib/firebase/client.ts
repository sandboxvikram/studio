import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

import {firebaseConfig} from './config';

/**
 * Initializes the Firebase app if it hasn't been already.
 */
function getFirebaseApp() {
    if (getApps().length === 0) {
        return initializeApp(firebaseConfig);
    } else {
        return getApp();
    }
}

export const app = getFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);