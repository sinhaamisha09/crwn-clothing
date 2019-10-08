 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyAjcslBWdn6kAD6QzwE5HqXmiDAxvM-tqQ",
    authDomain: "crwn-db-15c03.firebaseapp.com",
    databaseURL: "https://crwn-db-15c03.firebaseio.com",
    projectId: "crwn-db-15c03",
    storageBucket: "",
    messagingSenderId: "930590361733",
    appId: "1:930590361733:web:a6d0a59118fd5bc13501ec",
    measurementId: "G-3Z91MQ18VS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;