import firebase from '@firebase/app';
import '@firebase/firestore/';
import '@firebase/storage/';
import '@firebase/auth/';
//import '@firebase/firebaseui'

let firebaseConfig = {
  apiKey: "AIzaSyCNxprpzavRrc5UYYdQtrt9rXrXgyr3JoU",
  authDomain: "plu-polarn.firebaseapp.com",
  databaseURL: "https://plu-polarn.firebaseio.com",
  projectId: "plu-polarn",
  storageBucket: "plu-polarn.appspot.com",
  messagingSenderId: "696813258652",
  appId: "1:696813258652:web:ed68fe68d722f18e726a59",
  measurementId: "G-2WJ1VEK5KG"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const fieldPath = firebase.firestore.FieldPath;
export const fieldValue = firebase.firestore.FieldValue;
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const firebaseAuth = firebase.auth();
export const timestamp = firebase.firestore.Timestamp;

//export const firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
//export const ui = new firebaseui.auth.AuthUI(firebase.auth());
//export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase








/* import firebase from '@firebase/app';
import '@firebase/firestore/';
//import '@firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyCNxprpzavRrc5UYYdQtrt9rXrXgyr3JoU",
  authDomain: "plu-polarn.firebaseapp.com",
  databaseURL: "https://plu-polarn.firebaseio.com",
  projectId: "plu-polarn",
  storageBucket: "plu-polarn.appspot.com",
  messagingSenderId: "696813258652",
  appId: "1:696813258652:web:ed68fe68d722f18e726a59",
  measurementId: "G-2WJ1VEK5KG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
//export const firebaseAuth = firebase.auth();
/* export const storage = firebase.storage();
export const storageRef = storage.ref(); */
/*export const fieldPath = firebase.firestore.FieldPath;
export const fieldValue = firebase.firestore.FieldValue;
//export const db = app.database();

export default firebase */


  // firebase.analytics();