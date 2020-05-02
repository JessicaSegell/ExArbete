import Firebase from 'firebase';

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
  export const db = app.database();
 
 
  // firebase.analytics();