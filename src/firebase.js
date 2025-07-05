// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: "AIzaSyC84pbPBXmOpADEwGhQvwJiD8IhSwjAB24",
  authDomain: "simple-e-com-with-react-de50f.firebaseapp.com",
  projectId: "simple-e-com-with-react-de50f",
  storageBucket: "simple-e-com-with-react-de50f.firebasestorage.app",
  messagingSenderId: "604805837774",
  appId: "1:604805837774:web:6cff46fd42e68a7d5db19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db