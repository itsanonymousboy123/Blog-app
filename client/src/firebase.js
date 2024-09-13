// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "indianestate-76d12.firebaseapp.com",
  projectId: "indianestate-76d12",
  storageBucket: "indianestate-76d12.appspot.com",
  messagingSenderId: "558736636966",
  appId: "1:558736636966:web:9d55900e12abbabe593ae7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);