import firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALIgsbJNLsDgVk-7iuhENXPMTadysIBJo",
    authDomain: "project-movie-app.firebaseapp.com",
    databaseURL: "https://project-movie-app.firebaseio.com",
    projectId: "project-movie-app",
    storageBucket: "project-movie-app.appspot.com",
    messagingSenderId: "372115261332",
    appId: "1:372115261332:web:ad008899adb9c2c7907181"
  };


  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();