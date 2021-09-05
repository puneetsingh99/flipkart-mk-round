import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsList } from "./features/products/ProductsList";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
