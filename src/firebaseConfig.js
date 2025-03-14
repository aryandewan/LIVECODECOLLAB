// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmqhtZzaucQwQcdp-mJSV0niqRj3PQGzg",
  authDomain: "livecodecollab-4f0bd.firebaseapp.com",
  projectId: "livecodecollab-4f0bd",
  storageBucket: "livecodecollab-4f0bd.firebasestorage.app",
  messagingSenderId: "695452375830",
  appId: "1:695452375830:web:d0726382481fd935648e37",
  measurementId: "G-07RRWR69SB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
