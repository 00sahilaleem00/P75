import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDgramvYzHZ7sIn7q36q56JH7DNGkNBnQE",
  authDomain: "p70-newsletter.firebaseapp.com",
  projectId: "p70-newsletter",
  storageBucket: "p70-newsletter.appspot.com",
  messagingSenderId: "917298300743",
  appId: "1:917298300743:web:99f589dd817c26ae1d2e62",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
