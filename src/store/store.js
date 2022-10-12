import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

/**
 * Root reducer, combination of all reducers
 */
