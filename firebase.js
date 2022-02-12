import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDB0t_mvWnch6PXllFqOR6MXQWpBGOVx3w",
  authDomain: "share-2c8e4.firebaseapp.com",
  projectId: "share-2c8e4",
  storageBucket: "share-2c8e4.appspot.com",
  messagingSenderId: "754022354561",
  appId: "1:754022354561:web:351fc063af9d8d26cb0780",
  measurementId: "G-WPK47DCYTR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()
