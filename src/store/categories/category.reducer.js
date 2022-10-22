import CATEGORY_ACTION_TYPES from "./category.types";

export const INITIAL_STATE = {
  categoriesMap: null,
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.CATEGORIES_MAP:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
