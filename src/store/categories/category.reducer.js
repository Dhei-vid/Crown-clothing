import CATEGORY_ACTION_TYPES from "./category.types";

export const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  console.log("Payload", payload);
  console.log("type", type);

  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
        categories: payload,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
