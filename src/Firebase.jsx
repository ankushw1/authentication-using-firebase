import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'



const firebaseConfig = {

  apiKey: "AIzaSyB5BUFTBfmGe0iXhn4BPFnUDzApH64PCVA",

  authDomain: "expense-tracker-cd0d2.firebaseapp.com",

  projectId: "expense-tracker-cd0d2",

  storageBucket: "expense-tracker-cd0d2.appspot.com",

  messagingSenderId: "131367583045",

  appId: "1:131367583045:web:37121d6f0315c6ec97d22c"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth()