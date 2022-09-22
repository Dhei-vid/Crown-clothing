import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartitems contain productToadd
  const foundItems = cartItems.find((item) => item.id === productToAdd.id);
  // if found increment quantity (what we want is to return a new array)
  if (foundItems) {
    return cartItems.map((items) =>
      items.id === productToAdd.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }
  // return new array with modified cartitems/ new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
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

  // const counter = cartItems.length;
  const countHandler = (cartItems) => {
    return cartItems.reduce((count, items) => count + items.quantity, 0);
  };

  const value = {
    isCartOpen,
    setCartStatus,
    addItemToCart,
    cartItems,
    countHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
