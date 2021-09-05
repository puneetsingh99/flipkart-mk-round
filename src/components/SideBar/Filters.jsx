import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSideBar } from "./SideBarContext";

export const Filters = ({ filterList, heading }) => {
  const { onSelectFilter, filterBy } = useSideBar();
  console.log({ filterBy });
  return (
    <>
      <h2 className={`mb-1 text-sm`}>{heading.toUpperCase()}</h2>
      <ul className={`mb-4`}>
        {filterList.map((filter) => {
          return (
            <li key={uuidv4()} className={`text-sm text-gray-500`}>
              <label htmlFor={filter}>
                <input
                  type="checkbox"
                  name={filter}
                  id={filter}
                  checked={filterBy.includes(filter)}
                  onChange={(e) => onSelectFilter(e)}
                  className={`mr-2`}
                />
                {filter}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
