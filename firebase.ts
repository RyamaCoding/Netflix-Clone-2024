// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLQvAm6PTgQbpnIQNZcHEpJSToiwUGTbE",
  authDomain: "netflix-clone-2024-bed10.firebaseapp.com",
  projectId: "netflix-clone-2024-bed10",
  storageBucket: "netflix-clone-2024-bed10.appspot.com",
  messagingSenderId: "807796355271",
  appId: "1:807796355271:web:b2e3ef634fe3661b2c4ee2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }