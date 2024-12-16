import firebase from "firebase/compat/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAAn0WSJiu5pxh_cGXKUT24Vr6CIsThelA",
    authDomain: "todoist-tut-cfaed.firebaseapp.com",
    projectId: "todoist-tut-cfaed",
    storageBucket: "todoist-tut-cfaed.firebasestorage.app",
    messagingSenderId: "345628065711",
    appId: "1:345628065711:web:e0628f13eed08f9299b95a"
});

export { firebaseConfig as firebase }