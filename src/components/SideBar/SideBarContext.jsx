import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const SideBarContext = createContext(null);

const initialValue = {
  sortBy: "none",
  filterBy: "none",
};

export const SideBarProvider = ({ children }) => {
  const persistentSideBar = useLocalStorage("flipkartSidebar", initialValue);
  const [sideBar, setSideBar] = useState(persistentSideBar);
  const onSelectFilter = () => {
    console.log("filter");
  };

  const onSelectSort = () => {
    console.log("sort");
  };

  return (
    <SideBarContext.Provider
      value={{ ...sideBar, onSelectFilter, onSelectSort }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(SideBarContext);
};
