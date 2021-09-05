import React from "react";
import products from "../../data/products";
import { ProductCard } from "./components/ProductCard";
import { v4 as uuidv4 } from "uuid";

export const ProductsList = () => {
  const { productList } = products;
  return (
    <main>
      <ul>
        {productList.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </ul>
    </main>
  );
};
