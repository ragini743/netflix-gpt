// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFyHEmcn95BTUxyO3QmbMACUWF_L3_kLU",
  authDomain: "netflixgpt-3c86d.firebaseapp.com",
  projectId: "netflixgpt-3c86d",
  storageBucket: "netflixgpt-3c86d.appspot.com",
  messagingSenderId: "283644933571",
  appId: "1:283644933571:web:9def54b296e87907493976",
  measurementId: "G-0L6YCZ8S7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);