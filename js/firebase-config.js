// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See FIREBASE_SETUP.md for instructions
const firebaseConfig = {
  apiKey: "AIzaSyAZaGX-I1axD9JDtzn5-OQw5T0q94W1JrY",
  authDomain: "krishna-iam.firebaseapp.com",
  projectId: "krishna-iam",
  storageBucket: "krishna-iam.firebasestorage.app",
  messagingSenderId: "724825423342",
  appId: "1:724825423342:web:64a6fba172b8cadf0a22ff",
  measurementId: "G-1Y9FBYMZ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
