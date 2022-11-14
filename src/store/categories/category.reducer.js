import CATEGORY_ACTION_TYPES from "./category.types";

export const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
