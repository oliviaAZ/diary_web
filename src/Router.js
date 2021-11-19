// Router.js
import React from "react";
import Home from "./Home/index";
import Detail from "./Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const RouterMap = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/detail">
        <Detail />
      </Route>
    </Switch>
  </Router>
}

export default RouterMap;
