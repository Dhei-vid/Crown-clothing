import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducers/reducers.utils";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((items) =>
      items.id === productToAdd.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 } as any];
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CategoryItem
): CartItem[] => {
  const foundItems = cartItems.find(
    (item: any) => item.id === productToRemove.id
  );

  // if quantity is greater than 1, remove it from cart
  if (foundItems?.quantity === 1) {
    return cartItems.filter((item: any) => item.id !== productToRemove.id);
  }

  return cartItems.map((items: any) =>
    items.id === productToRemove.id
      ? { ...items, quantity: items.quantity - 1 }
      : items
  );
};

const deleteCartItems = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): CartItem[] => cartItems.filter((item: any) => item.id !== itemToDelete.id);

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

export type FetchCartItem = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEM,
  CartItem[]
>;

export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CategoryItem): FetchCartItem => {
    const setToCart = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
  }
);

export const removeItemFromCart = withMatcher(
  (cartItems: CartItem[], productToRemove: CategoryItem): FetchCartItem => {
    const setToCart = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
  }
);

export const clearCartItem = withMatcher(
  (cartItems: CartItem[], itemToDelete: CartItem): FetchCartItem => {
    const setToCart = deleteCartItems(cartItems, itemToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, setToCart);
  }
);
