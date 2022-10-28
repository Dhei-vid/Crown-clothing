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

// remove cart items by decrementing quantity
const removeCartItem = (cartItems, productToRemove) => {
  // find if cartitems contain productToadd
  const foundItems = cartItems.find((item) => item.id === productToRemove.id);

  // check if the quantity is equal to 1
  if (foundItems.quantity === 1) {
    // for found items that have an id of 1,
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  // if found decrement quantity (what we want is to return a new array)
  return cartItems.map((items) =>
    items.id === productToRemove.id
      ? { ...items, quantity: items.quantity - 1 }
      : items
  );
};

// counting the cart items
const countCartItems = (cartItems) => {
  return cartItems.reduce((count, items) => count + items.quantity, 0);
};

// delete items from cart
const deleteCartItems = (cartItems, itemToDelete) =>
  cartItems.filter((item) => item.id !== itemToDelete.id);

// finding the total price for all items in the cart
const totalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, items) => total + items.price * items.quantity,
    0
  );
};
