import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABp8PCrcgyBJ9n4EZE3IbWSusUDMaJoG4",
  authDomain: "time-tracker-51d4e.firebaseapp.com",
  projectId: "time-tracker-51d4e",
  storageBucket: "time-tracker-51d4e.appspot.com",
  messagingSenderId: "1081749694837",
  appId: "1:1081749694837:web:0ad638975b6953aabfcb3c",
})

const db = firebaseApp.firestore()

export { db }
