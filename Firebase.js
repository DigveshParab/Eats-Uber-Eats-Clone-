import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFixQq4TPjZsqN3QjbXj1MmARM4SLeWLI",
  authDomain: "native-uber-eats-clone.firebaseapp.com",
  projectId: "native-uber-eats-clone",
  storageBucket: "native-uber-eats-clone.appspot.com",
  messagingSenderId: "776032076829",
  appId: "1:776032076829:web:f90bf834960b2be021f2f4",
  measurementId: "G-EVH0ZR4Z3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// features 
export const db = getFirestore(app)