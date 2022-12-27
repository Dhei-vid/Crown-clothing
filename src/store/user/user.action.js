import USER_ACTION_TYPES from "./user.types";

import { createAction } from "../../utils/reducers/reducers.utils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_START);

export const GoogleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const EmailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const userSignInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const userSignInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const EmailSignUpStart = (displayName, email, password) => createAction(USER_ACTION_TYPES.SIGN_UP_START, {displayName, email, password}) 

export const userSignUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails})

export const userSignUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
  
export const userSignOut = () => 
  createAction(USER_ACTION_TYPES.SIGN_OUT);
