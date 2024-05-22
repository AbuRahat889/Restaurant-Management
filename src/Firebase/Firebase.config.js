// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk9YCOSrv-8yz1KwyHaoy9ML17nNYGmOw",
  authDomain: "bistro-boss-590dc.firebaseapp.com",
  projectId: "bistro-boss-590dc",
  storageBucket: "bistro-boss-590dc.appspot.com",
  messagingSenderId: "377375160903",
  appId: "1:377375160903:web:57f791a07b289d28db0f62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
