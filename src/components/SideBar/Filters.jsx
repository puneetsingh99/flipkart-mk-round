import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Filters = ({ filterList, heading }) => {
  return (
    <>
      <h2 className={`my-2 text-lg`}>{heading}</h2>
      <ul>
        {filterList.map((filter) => {
          return (
            <li key={uuidv4()}>
              <label htmlFor={filter}>
                <input type="checkbox" name={filter} id={filter} /> {filter}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
