// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesnode

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

/**
 * To upload our json file to firestore, I need the collection method and the writeBatch method
 * collection method enables use to get a collection reference like the user doc reference
 */
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";

import { Category } from "../../store/categories/category.types";

// this config function enables us to attach this firebase instance to the instance we have created online
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

/**
 * to use google authentication we need to first off initialze a google provider
 * GoogleAuthProvider (providers in general) are instantiated as classes
 * Just as there is google provider there is also facebook provider and many more
 */
const googleProvider = new GoogleAuthProvider();

// setcustomparameters are primarily for google authentication providers
googleProvider.setCustomParameters({ prompt: "select_account" });

// authentication always has to be the same for different applications
export const auth = getAuth();

// Google popup Authentication
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Google redirect Authentication || to be exported
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// Setting up the database access implementation
export const db = getFirestore();

// setting type of objectToAdd
export type ObjectToAdd = {
  title: string;
};

// setting up the collection reference
export const addCollectionDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  // To create the collection reference
  const collectionRef = collection(db, collectionKey);

  // setting up a batch to enable a transaction
  const batch = writeBatch(db);

  /**
   * for creating the batch for each of the objects items
   * 1. Get the document reference
   * 2. I want to batch.set on the document reference given by firebase
   * 3. I have to await firing the batch
   */
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  displayName: string;
  createdAt: Date;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {}
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  // doc gets 3 params
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // with exists method we can check if a document exists in database
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.error("error from creating user", error.message);
    }
  }
  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

// For the sign in Component to create a new user
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// For the sign in Component
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// For the sign out
export const signOutUser = async () => {
  return await signOut(auth);
};

// Creating a listener that listens for changes in the code
// onAuthStateChanged gets two parameters, the auth and a callback function
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  // the onAuthStateChanged is an open state listener (whenever the auth changes it runs)
  // the issue is that we need to tell it to unmount when the userContext unmounts (memory leak)
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
