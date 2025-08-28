// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpZNQtu1sZfC13Yww_RClS-cYp3tETcR0",
  authDomain: "auth-moha-milon-c1cd4.firebaseapp.com",
  projectId: "auth-moha-milon-c1cd4",
  storageBucket: "auth-moha-milon-c1cd4.firebasestorage.app",
  messagingSenderId: "239866636954",
  appId: "1:239866636954:web:f7a5790177bb6d55ff0d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);