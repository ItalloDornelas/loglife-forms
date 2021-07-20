import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
// import Dashboard from "../pages/Dashboard";
// import Route from "./route";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      {/* <Route path="/dashboard" isPrivate component={Dashboard} />  */}
    </Switch>
  );
};

export default Routes;
