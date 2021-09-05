import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBarProvider } from "./components/SideBar/SideBarContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
