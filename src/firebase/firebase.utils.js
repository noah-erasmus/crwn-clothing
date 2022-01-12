import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCAkCUCnjihb1omHTDAk0Erty6ViDOCpXQ",
  authDomain: "crwn-clothing-ce3d1.firebaseapp.com",
  projectId: "crwn-clothing-ce3d1",
  storageBucket: "crwn-clothing-ce3d1.appspot.com",
  messagingSenderId: "800340829915",
  appId: "1:800340829915:web:0b27b71c93a2ca0fc58efe",
  measurementId: "G-NVWPVVRNJ3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
