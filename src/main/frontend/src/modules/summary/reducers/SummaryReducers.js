import { SUMMARY_ACTIONS } from '../../constants';

let summaryState = {
  incomeSummary: [],
  expenseSummary: [],
  savingsSummary: [],
  ui: {
    isFetching: false
  }
};

export default function (state = summaryState, action) {
  switch(action.type) {
    case SUMMARY_ACTIONS.FETCH:
    case SUMMARY_ACTIONS.FETCH_SUCCESS:
    case SUMMARY_ACTIONS.FETCH_FAILED:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
}