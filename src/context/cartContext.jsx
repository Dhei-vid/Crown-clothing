import { createContext, useState } from "react";

// Add cart items by incrementing quantity
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

// remove cart items by decrementing quantity
const removeCartItem = (cartItems, productToRemove) => {
  // find if cartitems contain productToadd
  const foundItems = cartItems.find((item) => item.id === productToRemove.id);

  // check if the quantity is equal to 1
  if (foundItems.quantity === 1) {
    // for found items that have an id of 1,
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  // if found decrement quantity (what we want is to return a new array)
  return cartItems.map((items) =>
    items.id === productToRemove.id
      ? { ...items, quantity: items.quantity - 1 }
      : items
  );
};

// delete items from cart
const deleteCartItems = (cartItems, itemToDelete) =>
  cartItems.filter((item) => item.id !== itemToDelete.id);

export const CartContext = createContext({
  isCartOpen: false,
  total: 0,
  setCartStatus: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartStatus] = useState(false);
  const [cartItems, setItemToCart] = useState([]);
  const [total, setTotal] = useState(0);

  // creating a function that triggers when the user click the add to cart button
  // the function receives the product data and decides if to create a new cart item if empty or find the old data and increase it by one
  const addItemToCart = (productToAdd) => {
    setItemToCart(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setItemToCart(removeCartItem(cartItems, productToRemove));
  };

  const countHandler = (cartItems) => {
    return cartItems.reduce((count, items) => count + items.quantity, 0);
  };

  const clearCartItem = (itemToDelete) => {
    setItemToCart(deleteCartItems(cartItems, itemToDelete));
  };

  const value = {
    isCartOpen,
    setCartStatus,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    countHandler,
    clearCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
