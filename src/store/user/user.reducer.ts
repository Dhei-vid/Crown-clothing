import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";

import {
  userSignInSuccess,
  userSignInFailed,
  userSignUpFailed,
  userSignOutSuccess,
  userSignOutFailed,
} from "./user.action";

export type InitialState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: InitialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (userSignOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (userSignInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (
    userSignUpFailed.match(action) ||
    userSignInFailed.match(action) ||
    userSignOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
