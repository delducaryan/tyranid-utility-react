import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RouterView() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </div>
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
