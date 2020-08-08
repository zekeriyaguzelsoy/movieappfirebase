import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_KEY_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_KEY_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_ID
  };


// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();

// firebase auth
const auth = firebase.auth()

// firebase collections
const notesCollection = db.collection('notes')

export {
  auth,
  firebase,
  notesCollection
}