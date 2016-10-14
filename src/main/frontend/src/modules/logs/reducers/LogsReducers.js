import { LOGS_ACTIONS } from '../../constants';
var Immutable = require('immutable')

let logsState = Immutable.fromJS({
  entries: [],
  fields: {},
  ui: {
    isFetching: false,
    showModal: false
  }
});

export default function (state = logsState, action) {
  switch(action.type) {
    case LOGS_ACTIONS.FETCH:
      return state.setIn(["ui", "isFetching"], true);
    case LOGS_ACTIONS.FETCH_SUCCESS:
      return state.set("entries", action.entries)
        .setIn(["ui", "isFetching"], false);
    case LOGS_ACTIONS.FETCH_FAILED:
      return state.setIn(["ui", "isFetching"], false);
    case LOGS_ACTIONS.UPDATE_FIELD:
      return state.setIn(["fields", action.name], action.value);
    case LOGS_ACTIONS.MODAL_STATE_CHANGED:
      return state.setIn(["ui", "showModal"], action.modalState);
    case LOGS_ACTIONS.CLEAR_FIELDS:
      return state.set("fields", {});
    case LOGS_ACTIONS.INIT_UPDATE_FORM:
      Object.keys(action.entryData).map(key => {
        state = state.setIn(["fields", key], action.entryData[key]);
      });
      return state;
    default:
      return state;
  }
}