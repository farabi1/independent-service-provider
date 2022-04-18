// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQoVLRKJJ8hR1kaT6lEOjST3dSMhRIOA4",
  authDomain: "single-page-service-provider.firebaseapp.com",
  projectId: "single-page-service-provider",
  storageBucket: "single-page-service-provider.appspot.com",
  messagingSenderId: "1077024857204",
  appId: "1:1077024857204:web:fcde39bfd077000cdb0521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;