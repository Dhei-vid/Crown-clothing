export const INITIAL_STATE = {
  isCartOpen: false,
  total: 0,
  count: 0,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CURRENT_TOTAL:
      return {
        ...state,
        total: payload,
      };
    case CART_ACTION_TYPES.SET_CURRENT_COUNT:
      return {
        ...state,
        count: payload,
      };
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
      throw new Error("Invalid action type: " + type);
  }
};
