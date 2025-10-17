// src/config/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDH68iJFcdtpIYqLUA2siuDvaATHN6NAaw",
  authDomain: "renazcer-datingappia.firebaseapp.com",
  projectId: "renazcer-datingappia",
  storageBucket: "renazcer-datingappia.firebasestorage.app",
  messagingSenderId: "189210121283",
  appId: "1:189210121283:web:750fc51661acd4f6d6f0f6",
};

// 🔥 Inicialización principal de Firebase
const app = initializeApp(firebaseConfig);

// 🔑 Exportamos los servicios que usará la app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
