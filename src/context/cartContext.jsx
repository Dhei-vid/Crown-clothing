import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setCartStatus: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartStatus] = useState(false);
  const value = { isCartOpen, setCartStatus };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
