import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmCsgUqZ32eN7rtMBpobcqBAvtpnQHF7g",
  authDomain: "finalweb-5964d.firebaseapp.com",
  projectId: "finalweb-5964d",
  storageBucket: "finalweb-5964d.appspot.com",
  messagingSenderId: "851813754445",
  appId: "1:851813754445:web:d7c1a4d319e2c2a3905e04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
