import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiW-u8LCK0gS7_R8YygWl7bpb9gj6lAW4",
  authDomain: "fb-messenger-clone-9130c.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-9130c.firebaseio.com",
  projectId: "fb-messenger-clone-9130c",
  storageBucket: "fb-messenger-clone-9130c.appspot.com",
  messagingSenderId: "518017507123",
  appId: "1:518017507123:web:1a9b50690d8270b54e2846",
  measurementId: "G-JCVLPJDWWS",
});

const db = firebaseApp.firestore();

export default db;
