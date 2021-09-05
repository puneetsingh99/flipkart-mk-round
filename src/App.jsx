import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsList } from "./features/products/ProductsList";
import { Navbar } from "./components/Navbar";
import { useSideBar } from "./components/SideBar/SideBarContext";

function App() {
  console.log(useSideBar());
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
