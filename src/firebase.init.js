import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Q0yeuLvAwVKvT_UA36e1DBLvTOHL0jg",
  authDomain: "single-service-provider-57c16.firebaseapp.com",
  projectId: "single-service-provider-57c16",
  storageBucket: "single-service-provider-57c16.appspot.com",
  messagingSenderId: "289424344320",
  appId: "1:289424344320:web:8a18e00bc7ca6552d9dfe5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;