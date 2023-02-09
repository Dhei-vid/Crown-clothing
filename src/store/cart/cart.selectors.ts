import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartStatus = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCart = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartTotal = createSelector([selectCart], (cart) =>
  cart.reduce((total, items) => total + items.price * items.quantity, 0)
);

export const selectCartCount = createSelector([selectCart], (cart) =>
  cart.reduce((count, items) => count + items.quantity, 0)
);
