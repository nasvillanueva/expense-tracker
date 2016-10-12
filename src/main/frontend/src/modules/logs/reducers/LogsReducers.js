import { LOGS_ACTIONS } from '../../constants';

let logsState = {
  entries: [],
  ui: {
    isFetching: false
  }
};

export default function (state = logsState, action) {
  switch(action.type) {
    case LOGS_ACTIONS.FETCH:
    case LOGS_ACTIONS.FETCH_SUCCESS:
    case LOGS_ACTIONS.FETCH_FAILED:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
}