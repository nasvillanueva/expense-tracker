import { SUMMARY_ACTIONS } from '../../constants';

let summaryState = {
  incomeTotal: 0,
  expenseTotal: 0,
  savingsTotal: 0,
  ui: {
    isFetching: false
  }
};

export default function (state = summaryState, action) {
  switch(action.type) {
    case SUMMARY_ACTIONS.FETCH:
    case SUMMARY_ACTIONS.FETCH_FAILED:
    case SUMMARY_ACTIONS.FETCH_SUCCESS:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
}