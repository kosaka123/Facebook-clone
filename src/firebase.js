import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6CME-5-WrPR3PTpgIlx6fm3Grq6B9gfM",
  authDomain: "facebook-clone-61e65.firebaseapp.com",
  databaseURL: "https://facebook-clone-61e65.firebaseio.com",
  projectId: "facebook-clone-61e65",
  storageBucket: "facebook-clone-61e65.appspot.com",
  messagingSenderId: "38683924251",
  appId: "1:38683924251:web:6feec3158cba2eee2fa5be",
  measurementId: "G-CCMR4GWEER",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
