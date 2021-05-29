import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyBev8KiGypful1Gx6-wjWEjc_Ba5sBES6c",
    authDomain: "crwn-db-9ed28.firebaseapp.com",
    projectId: "crwn-db-9ed28",
    storageBucket: "crwn-db-9ed28.appspot.com",
    messagingSenderId: "1063346079987",
    appId: "1:1063346079987:web:5def7f9e39e0207a2b4f86"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;