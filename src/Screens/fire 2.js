
import firebase from "firebase";
import "firebase/auth";
const firebaseConfig={
        apiKey: "AIzaSyBUoMGHyPOS2arOuSfB_JsW5EiiMtcWRds",
        authDomain: "rawayath-e12d3.firebaseapp.com",
        projectId: "rawayath-e12d3",
        storageBucket: "rawayath-e12d3.appspot.com",
        messagingSenderId: "493124671699",
        appId: "1:493124671699:web:0ba3be6cab09b09ef95c26",
        measurementId: "G-C99239T46N"
      };
var connection=firebase.initializeApp(firebaseConfig);
var db= connection.firestore();
export {db};