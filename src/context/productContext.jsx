import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({
  products: null,
  setCurrentProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setCurrentProduct] = useState(SHOP_DATA);
  const value = { products, setCurrentProduct };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
