import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAAn0WSJiu5pxh_cGXKUT24Vr6CIsThelA",
    authDomain: "todoist-tut-cfaed.firebaseapp.com",
    projectId: "todoist-tut-cfaed",
    storageBucket: "todoist-tut-cfaed.appspot.com",
    messagingSenderId: "345628065711",
    appId: "1:345628065711:web:e0628f13eed08f9299b95a"
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
