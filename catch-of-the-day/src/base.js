import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSWV8Ta4CYQHDnuh-iGreWvf6S-CYnEWM",
  authDomain: "catch-of-the-day-d0756.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-d0756.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
