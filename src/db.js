import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIx-HOlLHpnDlDmdnPVFDqb9wKX1YsFpI",
  authDomain: "vue-firebase-8d4e9.firebaseapp.com",
  databaseURL:
    "https://vue-firebase-8d4e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-firebase-8d4e9",
  storageBucket: "vue-firebase-8d4e9.appspot.com",
  messagingSenderId: "199295015006",
  appId: "1:199295015006:web:d9ea4293b6a0ecc1d8bccf",
};

// Get a Firestore instance
export const firebaseApp = initializeApp(firebaseConfig);
