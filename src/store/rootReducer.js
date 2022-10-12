import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

// D combineReducers takes an object with the name of the reducer slice the reducers function
export const rootReducers = combineReducers({
  use: userReducer,
});
