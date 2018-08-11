import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANns4hkVrOjWzAUC86px5ARMV_K2GemBE",
    authDomain: "catch-of-the-day-cetoke2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-cetoke2.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export {firebaseApp};

// this is a default export
export default base;