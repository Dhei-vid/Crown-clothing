// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// this config function enables use to attach this firebase instance to the instance we have created online
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIixH1vIvDegqJ64n5DtVHZNw3q40YqS0",
  authDomain: "gold-clothing-db.firebaseapp.com",
  projectId: "gold-clothing-db",
  storageBucket: "gold-clothing-db.appspot.com",
  messagingSenderId: "499942691299",
  appId: "1:499942691299:web:c4075b524146b40adc50d6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// to use google authentication we need to first of initialze a google provider
// GoogleAuthProvider is a class
const provider = new GoogleAuthProvider();

// setcustomparameters are primarily for google authentication providers
provider.setCustomParameters({ prompt: "select_account" });

// authentication always has to be the same for different applications
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
