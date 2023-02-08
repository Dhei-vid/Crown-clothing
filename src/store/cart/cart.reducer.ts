import { AnyAction } from "redux";
import { CartStatus } from "../../store/cart/cart.action";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};

export const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CartState => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_STATUS:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
