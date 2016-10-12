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

function fetchDataSuccess(summary, category) {
  var state = {
    ui: {
      isFetching: false
    }
  };
  state[CATEGORY_SUMMARY[category]] = summary;
  return {
    type: SUMMARY_ACTIONS.FETCH_SUCCESS,
    state: summary

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