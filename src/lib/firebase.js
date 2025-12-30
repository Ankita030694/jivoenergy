// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5VCVKXImXk5KsG-GO-v_pt-VOcRcgSh8",
  authDomain: "jivoenergy.firebaseapp.com",
  projectId: "jivoenergy",
  storageBucket: "jivoenergy.firebasestorage.app",
  messagingSenderId: "697726677878",
  appId: "1:697726677878:web:2b658e347ed2150462c057",
  measurementId: "G-LJ3PPTBQ4V"
};

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };