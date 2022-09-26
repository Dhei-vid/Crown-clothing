import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const ProductContext = createContext({
  products: null,
  setCurrentProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setCurrentProduct] = useState([]);
  const value = { products, setCurrentProduct };

  /**
   * The best way to use useEffect with an async function  is to wrap it in an async function
   */
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  });

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
