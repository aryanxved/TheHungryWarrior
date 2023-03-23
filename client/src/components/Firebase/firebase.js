import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7lRbnGcaDep2G2TxNVIcSnV8VNlGKIiI",
  authDomain: "thehungrywarrior-9619e.firebaseapp.com",
  projectId: "thehungrywarrior-9619e",
  storageBucket: "thehungrywarrior-9619e.appspot.com",
  messagingSenderId: "625368396706",
  appId: "1:625368396706:web:724d47c944ff886c0a38fb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doGetIdToken = bool => {
    return this.auth.currentUser.getIdToken(/* forceRefresh */ bool);
  };

  doGetUserByEmail = email => this.auth.getUserByEmail(email);
}

export const auth = app.auth()

export default Firebase;

