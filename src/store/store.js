import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import { rootReducers } from "./root-reducers";

/**
 * Root reducer, combination of all reducers
 * createStore takes 3 argument, but rootreducer is the most important
 * createStore is deprecated in redux 4.2.0 so I had to downgrade to redux 4.1.2
 * logger lets us see what the state looks like before the action is dispatched, the action and the state after the action
 * Middleware are action libraries that run before the action gets to the reducer
 */

const middleWare = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const Store = createStore(rootReducers, undefined, composedEnhancers);
