import "./App.css";
import React from "react";
import Start from "./Components/Start";
import Home from "./Home";
import Route from "./Route";
import Head from "./Head";
import Details from "./Components/Details";

export default () => {
  return (
    <div className="ui container">
      <Head />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/start">
        <Start />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </div>
  );
};
