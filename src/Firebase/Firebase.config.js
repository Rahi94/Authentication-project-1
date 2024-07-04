// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYvyuvf3UCSEactHG1owQXLKJbmaH3YE4",
  authDomain: "authentication-first-pro-66355.firebaseapp.com",
  projectId: "authentication-first-pro-66355",
  storageBucket: "authentication-first-pro-66355.appspot.com",
  messagingSenderId: "791002396598",
  appId: "1:791002396598:web:825844538c6c2f90247317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;