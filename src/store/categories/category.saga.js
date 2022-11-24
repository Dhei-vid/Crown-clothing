import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategorySuccess, fetchCategoryFailed } from "./category.action";
import CATEGORY_ACTION_TYPES from "./category.types";

export function* fetchCategoryAsync() {
  // instead of await, we use yield
  // to make a generator effect, we use a call keyword (where we have functions)
  try {
    const categories = yield call(getCategoriesAndDocuments, "categories");

    // for dispatch, we use put
    return yield put(fetchCategorySuccess(categories));
  } catch (error) {
    return yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  // from the same action, it executes the latest one
  return yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
    fetchCategoryAsync
  );
}

export function* CategoriesSaga() {
  // runs everything on its line till finished
  return yield all([call(onFetchCategories)]);
}
