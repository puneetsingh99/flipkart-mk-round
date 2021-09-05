import React from "react";
import products from "../../data/products";
import { ProductCard } from "./components/ProductCard";
import { SideBar } from "../../components/SideBar";
import { v4 as uuidv4 } from "uuid";

export const ProductsList = () => {
  const { productList } = products;
  return (
    <main className={`py-4 grid grid-cols-15`}>
      <SideBar />
      <ul className={`px-4 flex flex-wrap gap-6`}>
        {productList.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </ul>
    </main>
  );
};
