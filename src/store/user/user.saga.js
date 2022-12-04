import { takeLatest, all, call, put } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.types";

import { userSignInSuccess, userSignInFailed } from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    // to call a function, use the call generator
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    console.log(userSnapShot);
    console.log(userSnapShot.data());
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;

    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* checkUserSession() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION_START,
    isUserAuthenticated
  );
}

export function* userSaga() {
  yield all([call(checkUserSession)]);
}
