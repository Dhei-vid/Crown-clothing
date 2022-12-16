import { takeLatest, all, call, put } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.types";

import { userSignInSuccess, userSignInFailed } from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    // to call a function, use the call generator
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    yield put(
      userSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );

    console.log("userSnapShot", userSnapShot);
    console.log(userSnapShot.data());
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* withEmailAndPassword() {
  try {
  } catch (error) {}
}

export function* onGoogleSignIn() {
  try {
    // this returns an authentication document, which we extract the user doc
    const { user } = yield call(signInWithGooglePopup);

    yield call(getSnapShotFromUserAuth, user);
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

export function* oncheckUserSession() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION_START,
    isUserAuthenticated
  );
}

export function* onSignInWithGoogle() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

export function* userSaga() {
  yield all([call(oncheckUserSession), call(onSignInWithGoogle)]);
}

// TASK
// Try to migrate sign in and sign up (email and password) to flow through the already set up document authen. and snapShot
