import { takeLatest, all, call, put } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.types";
import collection from "firebase/firestores";

import { userSignInSuccess, userSignInFailed } from "./user.action";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";

export function* onCreateUserDocumentFromAuth() {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;
  } catch (error) {}
}

export function* checkUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION_START);
}

export function* userSaga() {
  yield all([]);
}
