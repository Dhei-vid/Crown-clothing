import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

// import { loggerMiddleWare } from "../middleware/logger";

import { logger } from "redux-logger";

import { rootReducers } from "./rootReducer";

/**
 * Root reducer, combination of all reducers
 * createStore takes 3 argument, but rootreducer is the most important
 * createStore is deprecated in redux 4.2.0 so I had to downgrade to redux 4.1.2
 * logger lets us see what the state looks like before the action is dispatched, the action and the state after the action
 * Middleware are action libraries that run before the action gets to the reducer
 * Currying a function (a function that returns another function)
 */

// const middleWare = [loggerMiddleWare];

// checking if the application is in development or production, change the "development" to "production"
// The middleware will console.log depending on what you pick
const middleWare = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWare));

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
