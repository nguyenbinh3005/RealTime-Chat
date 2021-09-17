import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBZYTpUi1Dn5NIkB7zhlKSfpwZl7xSdbSs",
    authDomain: "chat-app-a8c37.firebaseapp.com",
    projectId: "chat-app-a8c37",
    storageBucket: "chat-app-a8c37.appspot.com",
    messagingSenderId: "191192819339",
    appId: "1:191192819339:web:0f55b04f8a314f8df2568e",
    measurementId: "G-R6ZDXK09M2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

  auth.useEmulator('http://localhost:9099');
  if (window.location.hostname === 'localhost'){
    db.useEmulator('localhost', '8080');
  }

  export { db, auth};
  export default firebase;