import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_HR_APIKEY,
  authDomain: import.meta.env.VITE_HR_AUTHDOMAIN,
  projectId: import.meta.env.VITE_HR_PROJECTID,
  storageBucket: import.meta.env.VITE_HR_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_HR_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_HR_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);