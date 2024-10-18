// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGVgdjGhvjvR8vkYWR0YjhAIIWi94ibl8',
  authDomain: 'chat-app-bdec5.firebaseapp.com',
  projectId: 'chat-app-bdec5',
  storageBucket: 'chat-app-bdec5.appspot.com',
  messagingSenderId: '1077515012607',
  appId: '1:1077515012607:web:beefd61f20128764567fca',
  measurementId: 'G-GR1L6825BD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Authentication reference from console
export const auth = getAuth(app);

// Get Google provider reference
export const provider = new GoogleAuthProvider();

// Get database reference
export const db = getFirestore(app);
