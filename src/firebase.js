// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  runTransaction,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy2MIfwMTy2BO5HhBzFJ4fsfMPqro4rk0",
  authDomain: "pans-uniport-451fb.firebaseapp.com",
  projectId: "pans-uniport-451fb",
  storageBucket: "pans-uniport-451fb.firebasestorage.app",
  messagingSenderId: "913773736288",
  appId: "1:913773736288:web:8c6ddb827dec1ec223ae05",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Automatically sign-in anonymous users
export async function ensureAnonymousAuth() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) resolve(user);
      else
        signInAnonymously(auth)
          .then((cred) => resolve(cred.user))
          .catch(reject);
    });
  });
}
