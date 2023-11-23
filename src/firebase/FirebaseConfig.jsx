// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI8FXaEG9gAUxv2vwlAWzbjN2JZuw7bvs",
  authDomain: "ecommerce-app-fe349.firebaseapp.com",
  projectId: "ecommerce-app-fe349",
  storageBucket: "ecommerce-app-fe349.appspot.com",
  messagingSenderId: "343514246221",
  appId: "1:343514246221:web:f779d4f94fd7dbe82a0004",
  measurementId: "G-P86HWM1J7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDb = getFirestore(app);
const auth = getAuth(app)
export {fireDb,auth } ;