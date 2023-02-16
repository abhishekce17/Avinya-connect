const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCdggYhrPUCX3RCKHnI7pGe8SBVeoQoqro",
    authDomain: "avinya-connect.firebaseapp.com",
    projectId: "avinya-connect",
    storageBucket: "avinya-connect.appspot.com",
    messagingSenderId: "913694423532",
    appId: "1:913694423532:web:70c8198e75709c07a328c9",
    measurementId: "G-HESGGHS80F"
  };
// module.exports = firebaseConfig;
if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}


const db = firebase.firestore();
module.exports = db
