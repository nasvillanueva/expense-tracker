import { SUMMARY_ACTIONS } from '../../constants';

let summaryState = {
  total: {
    income: [],
    expense: [],
    savings: []
  },
  ui: {
    isFetching: false
  }
};

export default function (state = summaryState, action) {
  switch(action.type) {
    case SUMMARY_ACTIONS.FETCH:
    case SUMMARY_ACTIONS.FETCH_FAILED:
      return Object.assign({}, state, action.state);
    case SUMMARY_ACTIONS.FETCH_SUCCESS:
      let newState = Object.assign({}, state, action.state);
      console.log(newState);
      return newState;
    default:
      return state;
  }
}