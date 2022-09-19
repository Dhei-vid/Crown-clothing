import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartitems contain product to add
  // if found increment quantity
  // return new array with modified cartitems/ new cart items
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartStatus: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartStatus] = useState(false);
  const [cartItems, setItemToCart] = useState([]);

  // creating a function that triggers when the user click the add to cart button
  // the function receives the product data and decides if to create a new cart item if empty or find the old data and increase it by one
  const addItemToCart = (productToAdd) => {
    setItemToCart(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setCartStatus, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
