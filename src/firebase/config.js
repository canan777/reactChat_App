// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! İMPORT Edilecek
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-b2fac.firebaseapp.com",
  projectId: "chat-app-b2fac",
  storageBucket: "chat-app-b2fac.appspot.com",
  messagingSenderId: "526661748386",
  appId: "1:526661748386:web:bcb5d649bc7342fbd139fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! kimlik doğrulama bölümünün referansını uygulamaya al
export const auth = getAuth(app);

//! google sağlayıcısının kurulumunu yap
export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);
