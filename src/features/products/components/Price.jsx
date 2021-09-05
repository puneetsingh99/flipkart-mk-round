import React from "react";

export const Price = ({ price }) => {
  const { originalPrice, discountedPrice } = price;
  return (
    <div className="flex justify-start items-center">
      <h2 className="mr-4">{`₹ ${discountedPrice}`}</h2>
      <span className="text-sm text-gray-400 line-through">
        {`₹ ${originalPrice}`}
      </span>
    </div>
  );
};
