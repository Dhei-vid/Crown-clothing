import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoryReducer } from "./categories/category.reducer";

// combineReducers takes an object with the name of the reducer slice the reducers function
export const rootReducers = combineReducers({
  user: userReducer,
  category: categoryReducer,
});
