import { SUMMARY_ACTIONS, CATEGORY_SUMMARY } from "../../constants";
import SummaryService from "../services/SummaryService";

function fetchDataReq() {
  return {
    type: SUMMARY_ACTIONS.FETCH,
    state: {
      ui: {
        isFetching: true
      }
    }
  }
}

function fetchDataSuccess(total, category) {
  var state = {
    ui: {
      isFetching: false
    },
    total: {}
  };
  state[category.toLowerCase() + "Total"] = total;
  return {
    type: SUMMARY_ACTIONS.FETCH_SUCCESS,
    state: state
  }
}

function fetchDataFailed() {
  return {
    type: SUMMARY_ACTIONS.FETCH_FAILED,
    state: {
      ui: {
        isFetching: false
      }
    }
  }
}

function fetchBalanceSuccess(balance){
  return {
    type: SUMMARY_ACTIONS.FETCH_BALANCE_SUCCESS,
    balance: balance
  }
}

export function fetchData(category) {
  return dispatch => {
    dispatch(fetchDataReq());
    SummaryService.getSummary(category)
      .then(response => {
        console.log(response);
        dispatch(fetchDataSuccess(response.data, category));
      }).catch(error => {
      console.log(error);
      dispatch(fetchDataFailed());
    });
  }
}

export function getBalance() {
  return dispatch => {
    dispatch(fetchDataReq());
    SummaryService.getBalance()
      .then(response => {
        console.log(response);
        dispatch(fetchBalanceSuccess(total));
      }).catch(err => {
      console.log(err);
      dispatch(fetchDataFailed());
    })
  }
}