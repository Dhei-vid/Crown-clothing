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

/*********************************************************/
// Provider function
export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_CART_STATUS, boolean);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const setToCart = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const setToCart = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
};

export const clearCartItem = (cartItems, itemToDelete) => {
  const setToCart = deleteCartItems(cartItems, itemToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
};
