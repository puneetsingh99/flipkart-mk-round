import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBarProvider } from "./components/SideBar/SideBarContext";
import { ProductsProvider } from "./features/products/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <SideBarProvider>
          <App />
        </SideBarProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
