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
