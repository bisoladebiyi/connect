import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCHTDS-h09sHBaVC3baDBNPoT9Dn2s04nE",
  authDomain: "blog-ad6da.firebaseapp.com",
  projectId: "blog-ad6da",
  storageBucket: "blog-ad6da.appspot.com",
  messagingSenderId: "896016789476",
  appId: "1:896016789476:web:e90d656ba17e95bce721f1",
  measurementId: "G-4GQQJ6PJNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()
