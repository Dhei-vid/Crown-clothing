import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { rootSaga } from "./rootSaga";
import { rootReducers } from "./rootReducer";
// import thunk from "redux-thunk";
// import { loggerMiddleWare } from "../middleware/logger";

export type RootState = ReturnType<typeof rootReducers>;

/**
 * Root reducer, combination of all reducers
 * createStore takes 3 argument, but rootreducer is the most important
 * logger lets us see what the state looks like before the action is dispatched, the action and the state after the action
 * Middleware are action libraries that run before the action gets to the reducer
 * Currying a function (a function that returns another function)
 */

// const middleWare = [loggerMiddleWare];

// checking if the application is in development or production, change the "development" to "production"
// The middleware will console.log depending on what you pick

// const middleWare = [
//   process.env.NODE_ENV !== "production" && logger,
//   thunk,
// ].filter(Boolean); (for the thunk middleware)

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleWare = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleWare = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleWare,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
