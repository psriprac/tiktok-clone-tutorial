import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo74k4-cyzK_IRPy2nnDGH33Acy6sHe1k",
    authDomain: "tik-tok-clone-fd4d4.firebaseapp.com",
    projectId: "tik-tok-clone-fd4d4",
    storageBucket: "tik-tok-clone-fd4d4.appspot.com",
    messagingSenderId: "159889887833",
    appId: "1:159889887833:web:e832da82ffdf9a5a735748",
    measurementId: "G-08DB01S2R8"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;