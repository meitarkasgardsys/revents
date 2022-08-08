import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDoDlZKeo86QZ1Oq1uLa_rm-y6PkB3p2pU",
    authDomain: "calculator-app-4db59.firebaseapp.com",
    projectId: "calculator-app-4db59",
    storageBucket: "calculator-app-4db59.appspot.com",
    messagingSenderId: "192651199607",
    appId: "1:192651199607:web:4c55b2e973a45a49497272",
    measurementId: "G-TSPLMMXV8H"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;