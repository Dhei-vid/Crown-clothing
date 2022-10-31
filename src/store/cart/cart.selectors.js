import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCart = createSelector(
  [selectCartReducer],
  (cartslice) => cartslice.cart
);

// this is where I get to transform the data
export const selectCartMap = createSelector([selectCart], (cart) =>
  cart.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

// counting the cart items
const countCartItems = (cartItems) => {
  return cartItems.reduce((count, items) => count + items.quantity, 0);
};

// finding the total price for all items in the cart
const totalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, items) => total + items.price * items.quantity,
    0
  );
};
