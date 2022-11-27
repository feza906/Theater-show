// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjhXbmSRHOHdcF26UybZH7qL5TXBE3ftI",
  authDomain: "theater-app-d5276.firebaseapp.com",
  projectId: "theater-app-d5276",
  storageBucket: "theater-app-d5276.appspot.com",
  messagingSenderId: "71894757914",
  appId: "1:71894757914:web:a104ad2950c0ad50f9d7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();