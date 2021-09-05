import React from "react";
import { Price } from "./Price";
import { Size } from "./Size";

export const ProductCard = ({ product }) => {
  const { image, name, originalPrice, discountPercent, brand, sizes } = product;
  const price = { originalPrice, discountPercent };

  return (
    <article className="max-w-50 hover:shadow-md">
      <div>
        <img
          src={image}
          alt={name}
          loading="lazy"
          title={name}
          className={`max-h-60`}
        />
      </div>
      <div className={`p-1`}>
        <h3 className={`text-xs font-semibold text-gray-500`}>{brand}</h3>
        <h1
          title={name}
          className={`w-150 overflow-hidden whitespace-nowrap overflow-ellipsis`}
        >
          {`${name}`}
        </h1>
        <Price price={price} />
        <Size sizes={sizes} />
      </div>
    </article>
  );
};
