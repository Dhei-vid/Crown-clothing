import { createSelector } from "reselect";

const selectCartReducer = (state) => state.category;

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

const addCartItem = (cartItems, productToAdd) => {
  // find if cartitems contain productToadd
  const foundItems = cartItems.find((item) => item.id === productToAdd.id);
  // if found increment quantity (what we want is to return a new array)
  if (foundItems) {
    return cartItems.map((items) =>
      items.id === productToAdd.id
        ? { ...items, quantity: items.quantity + 1 }
        : items
    );
  }

  // return new array with modified cartitems/ new cart items.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
