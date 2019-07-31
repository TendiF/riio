import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css"

import Home from "./view/Home"
import Topics from "./view/Topics"

function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

export default BasicExample;
