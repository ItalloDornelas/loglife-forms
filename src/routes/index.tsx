import React from "react";
// import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
// import Route from "./route";
import Home from "../pages/Home/Home";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/login" component={Login} />
      <Route path="/dashboard" isPrivate component={Dashboard} /> */}
    </Switch>
  );
};

export default Routes;
