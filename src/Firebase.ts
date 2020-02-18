import firebase from "firebase/app";
import Book from "./models/Book";

const firebaseConfig = {
  apiKey: "AIzaSyAazswZwkMIrJX3Xwa9Ph6YrkVN5gdmzRg",
  authDomain: "tyranid-utility-react.firebaseapp.com",
  databaseURL: "https://tyranid-utility-react.firebaseio.com",
  projectId: "tyranid-utility-react",
  storageBucket: "tyranid-utility-react.appspot.com",
  messagingSenderId: "316992284721",
  appId: "1:316992284721:web:8b46e572bd75d02ff44d10",
  measurementId: "G-MP9Y52CWN1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
