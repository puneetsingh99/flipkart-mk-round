import React from "react";
import { Price } from "./Price";
import { Size } from "./Size";

export const ProductCard = ({ product }) => {
  const { image, name, originalPrice, discountedPrice, brand, sizes } = product;
  const price = { originalPrice, discountedPrice };

  return (
    <article className="max-w-40 hover:shadow-md">
      <div className={`mb-2`}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          title={name}
          className={`max-h-60`}
        />
      </div>
      <h3 className={`text-xs font-semibold text-gray-500`}>{brand}</h3>
      <h1
        title={name}
        className={`w-150 overflow-hidden whitespace-nowrap overflow-ellipsis`}
      >
        {`${name}`}
      </h1>
      <Price price={price} />
      <Size sizes={sizes} />
    </article>
  );
};
