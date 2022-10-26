import { compose, createStore, applyMiddleware } from "redux";

// import { logger } from "redux-logger";

import { rootReducers } from "./rootReducer";

/**
 * Root reducer, combination of all reducers
 * createStore takes 3 argument, but rootreducer is the most important
 * createStore is deprecated in redux 4.2.0 so I had to downgrade to redux 4.1.2
 * logger lets us see what the state looks like before the action is dispatched, the action and the state after the action
 * Middleware are action libraries that run before the action gets to the reducer
 * Currying a function (a function that returns another function)
 */

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type ", action.type);
  console.log("payload ", action.payload);
  console.log("current state: ", store.getState());

  next(action);
  console.log("next state: ", store.getState());
};

const middleWare = [loggerMiddleWare];

// const middleWare = [process.env.NODE_ENV === "development" && logger].filter(
//   Boolean
// );

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducers, undefined, composedEnhancers);
