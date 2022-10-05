import { createContext, useEffect, useReducer } from "react";

// Add cart items by incrementing quantity
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

  // return new array with modified cartitems/ new cart items
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

export const CartContext = createContext({
  isCartOpen: false,
  total: 0,
  count: 0,
  setCartStatus: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCartItem: () => {},
});

export const CART_ACTION_TYPES = {
  SET_CURRENT_TOTAL: "SET_CURRENT_TOTAL",
  SET_CURRENT_COUNT: "SET_CURRENT_COUNT",
  SET_CART_STATUS: "SET_CART_STATUS",
  SET_CART_ITEM: "SET_CART_ITEM",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CURRENT_TOTAL:
      return {
        total: payload,
      };
    case CART_ACTION_TYPES.SET_CURRENT_COUNT:
      return {
        count: payload,
      };
    case CART_ACTION_TYPES.SET_CART_STATUS:
      return {
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        cartItems: payload,
      };
    default:
      throw new Error("Invalid action type: " + type);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  total: 0,
  count: 0,
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setCartStatus] = useState(false);
  // const [cartItems, setItemToCart] = useState([]);
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, total, count, cartItems } = state;

  const setItemToCart = (cartItems) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: cartItems,
    });
  };

  const setTotal = (total) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CURRENT_TOTAL,
      payload: total,
    });
  };

  const setCount = (count) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CURRENT_COUNT,
      payload: count,
    });
  };

  const setCartStatus = (cartStatus) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_STATUS,
      payload: cartStatus,
    });
  };

  // creating a function that triggers when the user click the add to cart button
  // the function receives the product data and decides if to create a new cart item if empty or find the old data and increase it by one
  const addItemToCart = (productToAdd) => {
    setItemToCart(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setItemToCart(removeCartItem(cartItems, productToRemove));
  };

  const clearCartItem = (itemToDelete) => {
    setItemToCart(deleteCartItems(cartItems, itemToDelete));
  };

  // I used the use Effect because I wanted to update the DOM
  useEffect(() => {
    setTotal(totalPrice(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCount(countCartItems(cartItems));
  }, [cartItems]);

  console.log(cartItems);
  const value = {
    isCartOpen,
    total,
    setCartStatus,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    count,
    clearCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
