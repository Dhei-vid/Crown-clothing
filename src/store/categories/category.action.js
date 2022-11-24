import CATEGORY_ACTION_TYPES from "./category.types";

import { createAction } from "../../utils/reducers/reducers.utils";

// export const setCategories = (categories) => {
//   return createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY, categories);
// };

export const fetchCategoryStart = () => {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START);
};

export const fetchCategorySuccess = (categories) => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_SUCCESS,
    categories
  );
};

export const fetchCategoryFailed = (error) => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_FAILED,
    error
  );
};
