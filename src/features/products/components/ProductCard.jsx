import React from "react";
import { Price } from "./Price";
import { Size } from "./Size";

export const ProductCard = ({ product }) => {
  const { image, name, originalPrice, discountedPrice, brand, sizes } = product;
  const price = { originalPrice, discountedPrice };

  return (
    <article className="w-200 hover:shadow-md">
      <div>
        <img src={image} alt={name} loading="lazy" title={name} />
      </div>
      <h3 className={`text-xs font-semibold text-gray-500`}>{brand}</h3>
      <h1 title={name}>{name}</h1>
      <Price price={price} />
      <Size sizes={sizes} />
    </article>
  );
};
