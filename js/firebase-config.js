// Public Firebase web-app configuration for the SEP Major portal.
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
