import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCA8f1YoL689knB580iQzkbUZ-kHm2fTM0",
  authDomain: "instagram-clone-623ec.firebaseapp.com",
  projectId: "instagram-clone-623ec",
  storageBucket: "instagram-clone-623ec.appspot.com",
  messagingSenderId: "185246109730",
  appId: "1:185246109730:web:e18d02fc4a8fbbb7e6fa7b",
  measurementId: "G-2SK3L5N552",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
