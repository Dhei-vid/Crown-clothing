import { all, call } from 'redux-saga/effects'

import { userSaga } from './user/user.saga'
import { CategoriesSaga } from './categories/category.saga'

export function* rootSaga () {
  yield all([call(CategoriesSaga), call(userSaga)])
}
