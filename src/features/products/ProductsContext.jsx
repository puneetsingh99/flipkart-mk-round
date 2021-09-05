import React, { createContext, useContext } from "react";
import allProducts from "../../data/products";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const products = [...allProducts.productList];
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
