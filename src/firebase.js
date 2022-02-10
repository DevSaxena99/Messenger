import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqujcEAbPIbKLHeI9OB0ecrk8UB8em3I0",
  authDomain: "chatapp-de802.firebaseapp.com",
  projectId: "chatapp-de802",
  storageBucket: "chatapp-de802.appspot.com",
  messagingSenderId: "1080549291982",
  appId: "1:1080549291982:web:6ecdc702c492c783811d9f",
  measurementId: "G-VQJ9QT6VK3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
