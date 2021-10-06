import {initializeApp} from "firebase/firebase-app";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAWfjnPGkVfA-JcZc2hmHcfjKhaGVrgfmg",
    authDomain: "chat-b591c.firebaseapp.com",
    databaseURL: "https://chat-b591c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-b591c",
    storageBucket: "chat-b591c.appspot.com",
    messagingSenderId: "519695525479",
    appId: "1:519695525479:web:adaa36602c597edbab56c2",
    measurementId: "G-657CQH4HJ0"
};

const app = initializeApp(firebaseConfig);

export default app;
npm