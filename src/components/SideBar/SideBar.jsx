import React from "react";
import { Filters } from "./Filters";
import { useSideBar } from "./SideBarContext";

const brands = [
  "COBIO MAN",
  "VERO LIE",
  "Rimeline Fashion",
  "LOREZA",
  "kipek",
  "SEVEN ROCKS",
];

export const SideBar = () => {
  const { sortBy, onResetFilters, onSelectSort } = useSideBar();
  return (
    <aside className={`border px-8`}>
      <article className={`flex justify-between items-center mb-6`}>
        <h1 className={`text-lg`}>Filters </h1>
        <p
          className={`text-red-400 hover:cursor-pointer`}
          onClick={onResetFilters}
        >
          Clear All
        </p>
      </article>
      <div>
        <p className={`mb-1`}>Sort by: Price</p>
        <article
          className={`flex flex-col mb-4 text-sm text-gray-500`}
          onChange={(e) => onSelectSort(e)}
        >
          <label>
            <input
              type="radio"
              value="HIGH_TO_LOW"
              className={`mr-2`}
              name={`sortByPrice`}
              checked={sortBy === "HIGH_TO_LOW"}
            />
            High to low
          </label>
          <label>
            <input
              type="radio"
              value="LOW_TO_HIGH"
              className={`mr-2`}
              name={`sortByPrice`}
              checked={sortBy === "LOW_TO_HIGH"}
            />
            Low to high
          </label>
        </article>
      </div>
      <Filters filterList={["S", "M", "L", "XL", "XXL"]} heading={"Sizes"} />
      <Filters filterList={["Men", "Women"]} heading={"Ideal for"} />
      <Filters filterList={brands} heading={"Brands"} />
    </aside>
  );
};
