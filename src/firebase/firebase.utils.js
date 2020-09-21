import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDr8-tRz9wMkPDpmoMwy_P8QzF-LzXCXiI",
  authDomain: "crwn-db-a01a9.firebaseapp.com",
  databaseURL: "https://crwn-db-a01a9.firebaseio.com",
  projectId: "crwn-db-a01a9",
  storageBucket: "crwn-db-a01a9.appspot.com",
  messagingSenderId: "185891119651",
  appId: "1:185891119651:web:dc6b579d4b4492d0098796",
  measurementId: "G-LWV5WK6FV6",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (err) {
      console.log("error creating user", err.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
