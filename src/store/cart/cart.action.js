import CART_ACTION_TYPES from "./cart.types";
import { createAction } from "../../utils/reducers/reducers.utils";

const addCartItem = (cartItems, productToAdd) => {
  const foundItems = cartItems.find((item) => item.id === productToAdd.id);

  if (foundItems) {
    return cartItems.map((items) =>
      items.id === productToAdd.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const foundItems = cartItems.find((item) => item.id === productToRemove.id);

  if (foundItems.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  return cartItems.map((items) =>
    items.id === productToRemove.id
      ? { ...items, quantity: items.quantity - 1 }
      : items
  );
};

const deleteCartItems = (cartItems, itemToDelete) =>
  cartItems.filter((item) => item.id !== itemToDelete.id);

// export const setCart = (cart) => {
//   const cartItem = createAction(CART_ACTION_TYPES.SET_CART_ITEM, cart);
//   const total = createAction(CART_ACTION_TYPES.SET_CURRENT_TOTAL, cart);
//   const cartStatus = createAction(CART_ACTION_TYPES.SET_CART_STATUS, cart);
//   const count = createAction(CART_ACTION_TYPES.SET_CURRENT_COUNT, cart);

//   return { cartItem, total, cartStatus, count };
// };

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_CART_STATUS, boolean);
};

export const setCart = (cartItems) => {
  const addItemToCart = (productToAdd) => {
    setItemToCart(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setItemToCart(removeCartItem(cartItems, productToRemove));
  };

  const clearCartItem = (itemToDelete) => {
    setItemToCart(deleteCartItems(cartItems, itemToDelete));
  };
};

// const addItemToCart = (productToAdd) => {
//   setItemToCart(addCartItem(cartItems, productToAdd));
// };

// const removeItemFromCart = (productToRemove) => {
//   setItemToCart(removeCartItem(cartItems, productToRemove));
// };

// const clearCartItem = (itemToDelete) => {
//   setItemToCart(deleteCartItems(cartItems, itemToDelete));
// };
