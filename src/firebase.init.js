import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQoVLRKJJ8hR1kaT6lEOjST3dSMhRIOA4",
  authDomain: "single-page-service-provider.firebaseapp.com",
  projectId: "single-page-service-provider",
  storageBucket: "single-page-service-provider.appspot.com",
  messagingSenderId: "1077024857204",
  appId: "1:1077024857204:web:fcde39bfd077000cdb0521"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;