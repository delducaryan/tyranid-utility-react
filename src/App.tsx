import React, { FC } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import RouterComponent from "./components/Router";
import firebase from "./FirebaseConfig";

const theme = createMuiTheme({
  palette: createPalette({
    type: "dark"
  })
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterComponent />
    </ThemeProvider>
  );
};

export default App;
