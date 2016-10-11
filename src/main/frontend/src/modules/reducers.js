import logs from "./logs/reducers/LogsReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  logs: logs
});

export const rootReducer = (state, action) => {
  return reducers(state, action)
};