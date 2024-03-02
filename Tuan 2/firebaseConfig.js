import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCwcAmoWgymXKukH5FsB6A5PjL0sayZ2Ik",
    authDomain: "tuan2jsifirebase.firebaseapp.com",
    projectId: "tuan2jsifirebase",
    storageBucket: "tuan2jsifirebase.appspot.com",
    messagingSenderId: "132045903894",
    appId: "1:132045903894:web:aed5aa53281c788615bd37",
    measurementId: "G-XE2BXGSJ3W"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const register = async (auth, email, password) => {
    let isSuccess;
    let infoMesseage;
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        isSuccess = true;
    } catch (error) {

        isSuccess = false;
        infoMesseage = error.code;
    }
    return {
        isSuccess: isSuccess,
        infoMessage: infoMesseage,

    }
};



