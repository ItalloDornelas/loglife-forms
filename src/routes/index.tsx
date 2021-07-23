import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Route from "./route";
import { Switch } from "react-router-dom";
import Register from "../pages/RegisterMembers/RegisterMembers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/registerMember" isPrivate component={Register} />
    </Switch>
  );
};

export default Routes;
