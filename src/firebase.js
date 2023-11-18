import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2v4b_qGpm1Y2pVKffJiTo8Dur0HriBh4",
    authDomain: "clone-99079.firebaseapp.com",
    projectId: "clone-99079",
    storageBucket: "clone-99079.appspot.com",
    messagingSenderId: "388702330380",
    appId: "1:388702330380:web:a23ee86bd4d3fa94569829",
    measurementId: "G-8FRKYYHK5P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

 export  { db, auth };