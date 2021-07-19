import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBqxWjHUPm3sG6p5Vuc4T9UngeSXZnUIes",
    authDomain: "blogproject-7687e.firebaseapp.com",
    projectId: "blogproject-7687e",
    storageBucket: "blogproject-7687e.appspot.com",
    messagingSenderId: "474198306707",
    appId: "1:474198306707:web:2aea8bead012d2aa228266"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();