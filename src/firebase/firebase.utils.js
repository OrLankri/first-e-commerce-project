import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCnLd_iLeaVGgJfMz6dXUtPYxpfMU3x0XA",
    authDomain: "crwn-db-99c7e.firebaseapp.com",
    projectId: "crwn-db-99c7e",
    storageBucket: "crwn-db-99c7e.appspot.com",
    messagingSenderId: "1088048175446",
    appId: "1:1088048175446:web:162866d4dae23753a59ef7",
    measurementId: "G-0L9HSG6P0E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;