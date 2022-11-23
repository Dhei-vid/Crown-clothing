import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategorySuccess, fetchCategoryFailed } from "./category.action";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const fetchCategoryAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());

  try {
    const categories = await getCategoriesAndDocuments("categories");

    dispatch(fetchCategorySuccess(categories));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};

export function* CategoriesSaga() {
  // runs everything on its line till finished
  yield all([]);
}
