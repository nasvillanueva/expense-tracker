import { SUMMARY_ACTIONS } from "../../constants";
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

function fetchDataSuccess(entries) {
  return {
    type: SUMMARY_ACTIONS.FETCH_SUCCESS,
    state: {
      entries: entries,
      ui: {
        isFetching: false
      }
    }

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

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataReq());
    SummaryService.getIncomeSummary()
      .then(response => {
        console.log(response);
        dispatch(fetchDataSuccess(response.data));
      }).catch(error => {
      console.log(error);
      dispatch(fetchDataFailed());
    });
  }
}