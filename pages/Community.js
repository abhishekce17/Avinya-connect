import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import ChatRoom from "../Components/ChatRoom";
import styles from "../styles/Community.module.css"

// initialization
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCdggYhrPUCX3RCKHnI7pGe8SBVeoQoqro",
    authDomain: "avinya-connect.firebaseapp.com",
    projectId: "avinya-connect",
    storageBucket: "avinya-connect.appspot.com",
    messagingSenderId: "913694423532",
    appId: "1:913694423532:web:70c8198e75709c07a328c9",
    measurementId: "G-HESGGHS80F",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const db = firebase.firestore();

export default function Home() {
  const [user, setUser] = useState(() => auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    // get the google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    // signing in user
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  // signout
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <main>
        {user ? (
          <>
            <nav id="sign_out">
              <h2>Chat With us</h2>
            </nav>
            <ChatRoom user={user} db={db} />
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <section id="sign_in">
            <h1>Welcome to Chat Room</h1>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
          </section>
        )}
      </main>
    </div>
  );
}
