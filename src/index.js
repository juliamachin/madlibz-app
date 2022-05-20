import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HashRouter as Router } from "react-router-dom";

// anytime a component wraps around another component...its called
// as Higher Order Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
