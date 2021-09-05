import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Size = ({ sizes }) => {
  return (
    <div className={`flex items-center mb-2`}>
      <p className="text-sm">Sizes:</p>
      {sizes.map((size) => {
        return (
          <p key={uuidv4()} className={`text-xs ml-2`}>
            {size}
          </p>
        );
      })}
    </div>
  );
};
