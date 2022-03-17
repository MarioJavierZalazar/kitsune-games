// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUYPe3lM1F52gC72Dypkl7eFm3UvMzx7E",
  authDomain: "kitsune-games.firebaseapp.com",
  projectId: "kitsune-games",
  storageBucket: "kitsune-games.appspot.com",
  messagingSenderId: "1068950904335",
  appId: "1:1068950904335:web:6c45b9aca6bc94323d0d7a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;