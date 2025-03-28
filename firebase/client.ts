// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpouvBN9yH-vBh-aE41CuOSqspSNEoNAg",
  authDomain: "ai-interview-a4ea2.firebaseapp.com",
  projectId: "ai-interview-a4ea2",
  storageBucket: "ai-interview-a4ea2.firebasestorage.app",
  messagingSenderId: "1009621686842",
  appId: "1:1009621686842:web:5f2a0d1cf546f4d52cb303",
  measurementId: "G-4PJPPWG1BC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
