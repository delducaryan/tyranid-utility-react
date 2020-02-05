import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

export default function RouterView() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/test">Test</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
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
        <Route path="/about">
          <p>About</p>
        </Route>
      </Switch>
    </Router>
  );
}
