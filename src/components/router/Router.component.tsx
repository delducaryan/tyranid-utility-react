import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar";
import { Books } from "./routes";

export default function RouterView() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <p>Homepage</p>
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}
