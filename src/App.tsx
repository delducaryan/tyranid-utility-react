import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as firebase from "firebase/app";

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

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
