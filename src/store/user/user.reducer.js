import USER_ACTION_TYPES from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  // the state value refers to the previous state value
  // the action takes two arguments, the type(could be string) and the payload (which is the new state value)
  const { type, payload } = action;

  /*
 CHECK_USER_SESSION_START: "user/CHECK_USER_SESSION_START",
  GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "user/SIGN_IN_FAILURE",
*/

  // In redux we could get the action for all the reducers, and return the state.
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.CHECK_USER_SESSION_START:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
