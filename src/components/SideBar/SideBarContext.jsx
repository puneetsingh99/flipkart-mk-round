import React, { createContext, useContext, useState } from "react";

const SideBarContext = createContext(null);

const initialValue = {
  sortBy: "none",
  filterBy: [],
};

export const SideBarProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(initialValue);

  const onResetFilters = () => {
    setSideBar(initialValue);
  };

  const onSelectFilter = (event) => {
    const target = event.target;
    const value = target.checked;

    console.log(value);

    if (value) {
      setSideBar((prevValue) => {
        return {
          ...prevValue,
          filterBy: [...prevValue.filterBy, event.target.name],
        };
      });
    }

    if (!value) {
      setSideBar((prevValue) => {
        return {
          ...prevValue,
          filterBy: prevValue.filterBy.filter(
            (filter) => filter !== event.target.name
          ),
        };
      });
    }
  };

  const onSelectSort = (e) => {
    setSideBar((prevValue) => {
      return { ...prevValue, sortBy: e.target.value };
    });
  };

  return (
    <SideBarContext.Provider
      value={{ ...sideBar, onSelectFilter, onSelectSort, onResetFilters }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(SideBarContext);
};
