import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartStatus] = useState(SHOP_DATA);
  const value = { isCartOpen, setCartStatus };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
