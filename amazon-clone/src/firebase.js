// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCqBIFnUOFrabz7kMILEVlMyKynuCtcv9E",
    authDomain: "e-clone-f0209.firebaseapp.com",
    databaseURL: "https://challenge-f0209.firebaseio.com",
    projectId: "e-clone-f0209",
    storageBucket: "e-clone-f0209.appspot.com",
    messagingSenderId: "726175651622",
    appId: "1:726175651622:web:de2677b478f970a45293e7",
    measurementId: "G-ZD60ZL9M9H"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};