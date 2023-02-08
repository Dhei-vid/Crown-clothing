import { CART_ACTION_TYPES, CartItem } from "./cart.types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducers/reducers.utils";

const addCartItem = (cartItems: CartItem[], productToAdd: CartItem) => {
  const foundItems = cartItems.find((item) => item.id === productToAdd.id);

  if (foundItems) {
    return cartItems.map((items) => {
      items.id === productToAdd.id
        ? { ...items, quantity: items.quantity + 1 }
        : items;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = ({ cartItems, productToRemove }: any) => {
  const foundItems = cartItems.find(
    (item: any) => item.id === productToRemove.id
  );

  if (foundItems.quantity === 1) {
    return cartItems.filter((item: any) => item.id !== productToRemove.id);
  }

  return cartItems.map((items: any) =>
    items.id === productToRemove.id
      ? { ...items, quantity: items.quantity - 1 }
      : items
  );
};

const deleteCartItems = ({ cartItems, itemToDelete }: any) =>
  cartItems.filter((item: any) => item.id !== itemToDelete.id);

/*********************************************************/
export type CartStatus = {
  isCartOpen: boolean;
};

export type FetchCartStatus = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_STATUS,
  boolean
>;

export const setIsCartOpen = withMatcher((boolean: CartStatus) => {
  return createAction(CART_ACTION_TYPES.SET_CART_STATUS, boolean);
});

export const addItemToCart = (cartItems: any, productToAdd: any) => {
  const setToCart = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
};

export const removeItemFromCart = ({ cartItems, productToRemove }: any) => {
  const setToCart = removeCartItem({ cartItems, productToRemove });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
};

export const clearCartItem = ({ cartItems, itemToDelete }: any) => {
  const setToCart = deleteCartItems({ cartItems, itemToDelete });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
};
