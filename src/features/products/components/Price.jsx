import React from "react";

export const Price = ({ price }) => {
  const { originalPrice, discountPercent } = price;
  const discountedPrice = originalPrice * (1 - discountPercent / 100);
  return (
    <div className="flex justify-start items-center">
      <h2 className="mr-4">{`₹ ${Math.round(discountedPrice, 2)}`}</h2>
      <span className="text-sm text-gray-400 line-through">
        {`₹ ${originalPrice}`}
      </span>
    </div>
  );
};
