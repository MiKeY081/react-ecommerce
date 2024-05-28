// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxr0H6oqlA-sVhe5bEfRVWmoKuC2Oo8RI",
  authDomain: "eshop-e0a33.firebaseapp.com",
  projectId: "eshop-e0a33",
  storageBucket: "eshop-e0a33.appspot.com",
  messagingSenderId: "151601204832",
  appId: "1:151601204832:web:e1f7c4a4a6e4b00a6fbd05",
  measurementId: "G-GDELSZ844P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
