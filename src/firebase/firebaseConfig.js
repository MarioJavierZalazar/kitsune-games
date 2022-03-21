import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

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
export const productsCollection = collection(db, 'products')
export const orderCollection = collection(db, 'ordenes')

export default db;