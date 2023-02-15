const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyBZCnbWq9iCz8y6dCnMim21vgKrJKa6pXQ",
    authDomain: "my-web-app-ec666.firebaseapp.com",
    projectId: "my-web-app-ec666",
    storageBucket: "my-web-app-ec666.appspot.com",
    messagingSenderId: "365799176264",
    appId: "1:365799176264:web:88421daf4762fa61e3007d",
    measurementId: "G-X883RWYM1L"
};
// module.exports = firebaseConfig;
if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
module.exports = db
