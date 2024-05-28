import React, { createContext, useEffect, useState } from "react";
import ProductAPI from "../API/ProductAPI";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [search, setSearch] = useState();
  useEffect(() => {
    const data = ProductAPI.getAllProducts();
    setProducts(data.products);
  }, []);
  return (
    <SearchContext.Provider
      value={{ products, setProducts, search, setSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
