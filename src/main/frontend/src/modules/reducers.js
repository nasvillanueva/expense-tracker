import logs from "./logs/reducers/LogsReducers";
import summary from "./summary/reducers/SummaryReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  logs: logs,
  summary: summary
});

export const rootReducer = (state, action) => {
  return reducers(state, action)
};