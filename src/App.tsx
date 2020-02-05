import React, { FC } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import NavbarComponent from "./components/NavBar";
import RouterComponent from "./components/Router";

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

const theme = createMuiTheme({
  palette: createPalette({
    type: "dark"
  })
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarComponent />
      <RouterComponent />
    </ThemeProvider>
  );
};

export default App;
