import CART_ACTION_TYPES from "./cart.types";
import { createAction } from "../../utils/reducers/reducers.utils";

// SET_CURRENT_TOTAL: "cart/SET_CURRENT_TOTAL",
// SET_CURRENT_COUNT: "cart/SET_CURRENT_COUNT",
// SET_CART_STATUS: "cart/SET_CART_STATUS",
// SET_CART_ITEM: "cart/SET_CART_ITEM",

export const setCart = (cart) => {
  const cartItem = createAction(CART_ACTION_TYPES.SET_CART_ITEM, cart);
  const total = createAction(CART_ACTION_TYPES.SET_CURRENT_TOTAL, cart);
  const cartStatus = createAction(CART_ACTION_TYPES.SET_CART_STATUS, cart);
  const count = createAction(CART_ACTION_TYPES.SET_CURRENT_COUNT, cart);

  // console.log("cartItem", cartItem);
  // console.log("total", total);
  // console.log("cartStatus", cartStatus);
  // console.log("count", count);

  return { cartItem, total, cartStatus, count };
};
