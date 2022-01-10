import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8qFkQbCXxorDKH0O_x2kEaDheeWk2NNc",
  authDomain: "clone-1f2a5.firebaseapp.com",
  projectId: "clone-1f2a5",
  storageBucket: "clone-1f2a5.appspot.com",
  messagingSenderId: "516208095396",
  appId: "1:516208095396:web:df8c714a97f392b4dc3631"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}