import CATEGORY_ACTION_TYPES from "./category.types";

import { createAction } from "../../utils/reducers/reducers.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

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

export const fetchCategoryAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categories = getCategoriesAndDocuments(categories);

    dispatch(fetchCategorySuccess(categories));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};
