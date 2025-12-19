// app/lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDaqg2tdx64XNLOkRna2T0BeL1R99I0xlU",
  authDomain: "servies-5ecaf.firebaseapp.com",
  projectId: "servies-5ecaf",
  storageBucket: "servies-5ecaf.firebasestorage.app",
  messagingSenderId: "49068561122",
  appId: "1:49068561122:web:0481bb99162d9f3c3504bb",
  measurementId: "G-Y5WXBFHDR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth (FIXED)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);