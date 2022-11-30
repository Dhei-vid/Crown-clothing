import { takeLatest, all, call, put } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.types";
import collection from "firebase/firestores";

import { userSignInSuccess, userSignInFailed } from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* getSnapShotFromUser() {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = yield getDoc(userDocRef);

  console.log(userSnapShot);
  return userSnapShot
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;

    yield onCreateUserDocumentFromAuth();
  } catch (error) {}
}

export function* checkUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION_START);
}

export function* userSaga() {
  yield all([]);
}
