import USER_ACTION_TYPES from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  // the state value refers to the previous state value
  // the action takes two arguments, the type(could be string) and the payload (which is the new state value)
  const { type, payload } = action;

  // In redux we could get the action for all the reducers, and when we do not respond we need to return the state.

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
