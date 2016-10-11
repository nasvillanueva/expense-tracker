import { LOGS_ACTIONS } from '../../constants';
import LogsService from '../services/LogsService';


function fetchDataReq() {
  return {
    type: LOGS_ACTIONS.FETCH,
    state: {
      ui: {
        isFetching: true
      }
    }
  }
}

function fetchDataSuccess(entries) {
  return {
    type: LOGS_ACTIONS.FETCH_SUCCESS,
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
    type: LOGS_ACTIONS.FETCH_FAILED,
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
    LogsService.getLogs()
      .then(response => {
        console.log(response);
        dispatch(fetchDataSuccess(response.data));
      }).catch(error => {
      console.log(error);
      dispatch(fetchDataFailed());
    });
  }
}