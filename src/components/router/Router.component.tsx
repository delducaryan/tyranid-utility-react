import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import NavBar from "../NavBar";

export default function RouterView() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <p>Homepage</p>
        </Route>
        <Route path="/test">
          <p>Test</p>
        </Route>
      </Switch>
    </Router>
  );
}
