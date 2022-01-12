// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCtYA6RmHPT_3k_Css0Zd0iEPwhOSwpo8A",
    authDomain: "clone-69626.firebaseapp.com",
    projectId: "clone-69626",
    storageBucket: "clone-69626.appspot.com",
    messagingSenderId: "776912248206",
    appId: "1:776912248206:web:f694e7306078fda11218df",
    measurementId: "G-YZWY80HNE4"
 
});

const db =firebaseApp.firestore();
const auth= firebase.auth();

export {db,auth};