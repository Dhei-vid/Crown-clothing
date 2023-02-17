import { all, call } from "typed-redux-saga/macro";

import { userSaga } from "./user/user.saga";
import { CategoriesSaga } from "./categories/category.saga";

export function* rootSaga() {
  yield* all([call(CategoriesSaga), call(userSaga)]);
}
