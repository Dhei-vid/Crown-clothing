import USER_ACTION_TYPES from './user.types'

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  // the state value refers to the previous state value
  // the action takes two arguments, the type(could be string) and the payload (which is the new state value)
  const { type, payload } = action

  // In redux we could get the action for all the reducers, and return the state.
  switch (type) {
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      }
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}
