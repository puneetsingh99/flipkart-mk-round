import React from "react";
import products from "../../data/products";
import { ProductCard } from "./components/ProductCard";
import { SideBar } from "../../components/SideBar/SideBar";
import { useSideBar } from "../../components/SideBar/SideBarContext";
import { filterProducts } from "./filterProducts";
import { sortProducts } from "./sortProducts";

export const ProductsList = () => {
  const { filterBy, sortBy } = useSideBar();
  const { productList } = products;
  const filteredProducts = filterProducts(productList, filterBy);
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  const noProductsFound = filterBy.length > 0 && sortedProducts.length === 0;

  return (
    <main className={`py-4 grid grid-cols-15 gap-8`}>
      <SideBar />
      <ul className={`px-4 flex flex-wrap gap-10`}>
        {noProductsFound && (
          <div
            className={`w-full flex justify-center items-center text-2xl text-gray-500`}
          >
            No matching products found
          </div>
        )}
        {sortedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </main>
  );
};
