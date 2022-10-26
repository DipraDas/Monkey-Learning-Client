import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_JdaKJN2uUzTcJeSJKO3O3oNpAZE1ywo",
    authDomain: "monkey-learning.firebaseapp.com",
    projectId: "monkey-learning",
    storageBucket: "monkey-learning.appspot.com",
    messagingSenderId: "1057651169413",
    appId: "1:1057651169413:web:8407d2b3c62c7c05d4b1ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;