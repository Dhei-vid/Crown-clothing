import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

import {
  createAction,
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
  productToRemove: CartItem
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

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_STATUS,
  boolean
>;

export type SetCartItem = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEM,
  CartItem[]
>;

// Cart status action creator
export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_CART_STATUS, boolean);
});

// Cart Items action creator
export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItem =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEM, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): SetCartItem => {
  const newCartItem = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItem);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
): SetCartItem => {
  const newCartItem = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItem);
};

export const clearCartItem = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): SetCartItem => {
  const newCartItem = deleteCartItems(cartItems, itemToDelete);
  return setCartItems(newCartItem);
};
