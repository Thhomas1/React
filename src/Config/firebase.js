import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyArgluXAxJV4ei6N3WW07vki2a2glortZ8",
  authDomain: "thomas-d2c43.firebaseapp.com",
  databaseURL: "https://thomas-d2c43-default-rtdb.firebaseio.com",
  projectId: "thomas-d2c43",
  storageBucket: "thomas-d2c43.appspot.com",
  messagingSenderId: "176066527864",
  appId: "1:176066527864:web:f32ce7beb4c37160b5e38d"
  };

firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase;
  
