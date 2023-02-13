import USER_ACTION_TYPES from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import { UserDetails } from "./user.types";
import { AdditionalInformation } from "../../utils/firebase/firebase.utils";

import {
  ActionWithPayload,
  Action,
  createAction,
  withMatcher,
} from "../../utils/reducers/reducers.utils";

// TYPES
export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export type CheckUserSession =
  Action<USER_ACTION_TYPES.CHECK_USER_SESSION_START>;

export type GoogleSignInstart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  UserDetails
>;

export type UserSignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type UserSignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type EmailSignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type UserSignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: UserData; additionalDetails: AdditionalInformation }
>;

export type UserSignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type UserSignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type UserSignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type UserSignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

// ACTION CREATORS
export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
});

export const checkUserSession = withMatcher(
  (): CheckUserSession =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_START)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInstart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    })
);

export const userSignInSuccess = withMatcher(
  (user: UserData): UserSignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const userSignInFailed = withMatcher(
  (error: Error): UserSignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const emailSignUpStart = withMatcher(
  (email: string, password: string, displayName: string): EmailSignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const userSignUpSuccess = withMatcher(
  (
    user: UserData,
    additionalDetails: AdditionalInformation
  ): UserSignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const userSignOutStart = withMatcher(
  (): UserSignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const userSignOutSuccess = withMatcher(
  (): UserSignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const userSignOutFailed = withMatcher(
  (error: Error): UserSignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);
