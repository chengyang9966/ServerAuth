import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9V-J-1UGu5tIUjr6HxZq-zZHmD5-Vfhc",
  authDomain: "banking-70e54.firebaseapp.com",
  databaseURL: "https://banking-70e54.firebaseio.com",
  projectId: "banking-70e54",
  storageBucket: "banking-70e54.appspot.com",
  messagingSenderId: "166694450301",
  appId: "1:166694450301:web:7266d0c84df01354aa2d14",
  measurementId: "G-KSDKFX3KMV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
