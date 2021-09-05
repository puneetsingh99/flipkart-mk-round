import React from "react";
import { Filters } from "./Filters";

const brands = [
  "COBIO MEN",
  "VERO LIE",
  "Rimeline Fashion",
  "LOREZA",
  "kipek",
  "SEVEN ROCKS",
];

export const SideBar = () => {
  return (
    <aside className={`border px-8`}>
      <article className={`flex justify-between items-center`}>
        <h1 className={`text-lg`}>Filters </h1>
        <p className={`text-red-400 text-sm hover:cursor-pointer`}>Clear All</p>
      </article>
      <Filters filterList={["S", "M", "L", "XL", "XXL"]} heading={"Sizes"} />
      <Filters filterList={["Men", "Women"]} heading={"Ideal for"} />
      <Filters filterList={brands} heading={"Brands"} />
    </aside>
  );
};
