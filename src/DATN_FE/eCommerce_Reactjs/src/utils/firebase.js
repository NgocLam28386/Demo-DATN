import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBAHUY8jZaOinkA7K6rZgMO1zzHtRTAl_4",
  authDomain: "datn-otp-65051.firebaseapp.com",
  projectId: "datn-otp-65051",
  storageBucket: "datn-otp-65051.firebasestorage.app",
  messagingSenderId: "633676681860",
  appId: "1:633676681860:web:93a09c03678be0b163a8d1",
  measurementId: "G-JKLZFGN8FN"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))