// Public Firebase web-app configuration for the SEP Major portal.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: 'AIzaSyAEuIJz5YDbPGVoVmO689c72ekBRNMBD2s',
  authDomain: 'work-34b9a.firebaseapp.com',
  projectId: 'work-34b9a',
  storageBucket: 'work-34b9a.firebasestorage.app',
  messagingSenderId: '1042661370946',
  appId: '1:1042661370946:web:8d893efdf1319b65ea51db',
  measurementId: 'G-4QFEECJDQ3'
};
export const isFirebaseConfigured = !firebaseConfig.apiKey.startsWith('YOUR_');

export const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
export const db = isFirebaseConfigured ? getFirestore(app) : null;
export const auth = isFirebaseConfigured ? getAuth(app) : null;
