import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategorySuccess, fetchCategoryFailed } from "./category.action";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export function* fetchCategoryAsync() {
  // instead of await, we use yield
  // to make a generator effect, we use a call keyword (where we have functions)
  try {
    const categories = yield* call(getCategoriesAndDocuments, "categories");

    // We do not call dispatch inside a generator
    // for dispatch, we use put
    yield* put(fetchCategorySuccess(categories));
  } catch (error) {
    yield* put(fetchCategoryFailed(error as Error));
  }
}

export function* onFetchCategories() {
  // for a number of the same action, it executes the latest one
  // The first argument is what it responds to and the next is what we want to happen
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CURRENT_CATEGORY_START,
    fetchCategoryAsync
  );
}

export function* CategoriesSaga() {
  // runs everything on its line till finished
  yield all([call(onFetchCategories)]);
}
