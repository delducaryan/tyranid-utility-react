import React, { FC } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import List from "./List";
import Add from "./Add";

const Main: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${match.path}/`}>
          <List />
        </Route>
        <Route path={`${match.path}/add`}>
          <Add />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
