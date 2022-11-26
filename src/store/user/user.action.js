import USER_ACTION_TYPES from "./user.types";

import { createAction } from "../../utils/reducers/reducers.utils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

/*
 CHECK_USER_SESSION_START: "user/CHECK_USER_SESSION_START",
  GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "user/SIGN_IN_FAILURE",
*/

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_START);

export const GoogleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const EmailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const userSignInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const userSignInFailure = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
