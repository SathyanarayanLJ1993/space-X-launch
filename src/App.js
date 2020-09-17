import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import SpaceXHome from "./components/SpaceXHome";

function App() {
  return (
    <div>
      <Route exact path="/" component={SpaceXHome} />
    </div>
  );
}

export default App;
