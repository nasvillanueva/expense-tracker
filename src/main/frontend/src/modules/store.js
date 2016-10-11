import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { rootReducer } from "./reducers";

const middleware = [applyMiddleware(promise(), thunk, logger())];


export function initStore(history){
  return createStore(rootReducer, compose(...middleware))
}