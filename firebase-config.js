// js/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// IMPORTANT: Replace with your actual Firebase project configuration!
const firebaseConfig = {
  apiKey: "AIzaSyB04Yt5zlivQhXtGMzgeZx7o1CNpdWKYHo",
  authDomain: "mycollegestore.firebaseapp.com",
  projectId: "mycollegestore",
  storageBucket: "mycollegestore.firebasestorage.app",
  messagingSenderId: "183558916777",
  appId: "1:183558916777:web:654e4ee4b8820abf1af7b8",
  measurementId: "G-GFJX6B7VPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services to be used in other parts of the app
export const auth = getAuth(app);
export const db = getFirestore(app);
