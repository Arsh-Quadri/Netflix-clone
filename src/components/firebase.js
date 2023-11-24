// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy1zXO4gCuIothVS3b4c_pU4gPaHVaPrw",
    authDomain: "netflix-by-arsh.firebaseapp.com",
    projectId: "netflix-by-arsh",
    storageBucket: "netflix-by-arsh.appspot.com",
    messagingSenderId: "604994780871",
    appId: "1:604994780871:web:c5a4cc0aad1f2f491448e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);