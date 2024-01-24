// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,  /* El apiKey debe ser privado */
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "my-ecommerce-5eeb9",
  storageBucket: "my-ecommerce-5eeb9.appspot.com",
  messagingSenderId: "956831231315",
  appId: "1:956831231315:web:bc4cc3fcffe9d0ce9885a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);