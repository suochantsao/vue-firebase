import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANRUyJ-fdRO5JOOWM9EOHZ1bzKqedmGYg",
  authDomain: "vue-firebase-6110c.firebaseapp.com",
  databaseURL:
    "https://vue-firebase-6110c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-firebase-6110c",
  storageBucket: "vue-firebase-6110c.appspot.com",
  messagingSenderId: "264996752172",
  appId: "1:264996752172:web:89033e8b9fd921d63eba89",
};

// Get a Firestore instance
export const firebaseApp = initializeApp(firebaseConfig);
