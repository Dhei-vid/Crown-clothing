import { all, call } from "redux-saga/effects";

import { CategoriesSaga } from "./categories/category.saga";

export function* rootSaga() {
  yield all([CategoriesSaga]);
}
