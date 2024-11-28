import { createContext, useContext, useState } from "react";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);

  const removeFromList = (filter) => {
    setFilters((prevFilters) =>
      prevFilters.filter((f) => f.filterName !== filter.filterName)
    );
  };

  const addFilter = (filter) => {
    setFilters((prevFilters) => {
      const existingFilter = prevFilters.find(
        (f) => f.filterName.toLowerCase() === filter.filterName.toLowerCase()
      );

      if (existingFilter) {
        return prevFilters.filter((f) => f.filterName !== filter.filterName);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, addFilter, removeFromList }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
