// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE__apiKey,
  authDomain:import.meta.env.VITE__authDomain,
  projectId:import.meta.env.VITE__projectId,
  storageBucket:import.meta.env.VITE__storageBucket,
  messagingSenderId:import.meta.env.VITE__messagingSenderId,
  appId:import.meta.env.VITE__appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;