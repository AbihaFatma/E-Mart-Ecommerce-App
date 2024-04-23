// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxhMF-yv5EGLTwaMtLu5zppNT0k0gJkto",
  authDomain: "myecommerceapp-5c5f1.firebaseapp.com",
  projectId: "myecommerceapp-5c5f1",
  storageBucket: "myecommerceapp-5c5f1.appspot.com",
  messagingSenderId: "651375820422",
  appId: "1:651375820422:web:2d1724285c192a923d5b07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
