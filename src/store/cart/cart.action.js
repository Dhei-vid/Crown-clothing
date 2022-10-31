import CART_ACTION_TYPES from "./cart.types";
import { createAction } from "../../utils/reducers/reducers.utils";

export const setCart = (cart) => {
  const cartItem = createAction(CART_ACTION_TYPES.SET_CART_ITEM, cart);
  const total = createAction(CART_ACTION_TYPES.SET_CURRENT_TOTAL, cart);
  const cartStatus = createAction(CART_ACTION_TYPES.SET_CART_STATUS, cart);
  const count = createAction(CART_ACTION_TYPES.SET_CURRENT_COUNT, cart);

  return { cartItem, total, cartStatus, count };
};
