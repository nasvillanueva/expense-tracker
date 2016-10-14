import { LOGS_ACTIONS } from '../../constants';
import LogsService from '../services/LogsService';


function fetchDataReq() {
  return {
    type: LOGS_ACTIONS.FETCH
  }
}

function fetchDataSuccess(entries) {
  return {
    type: LOGS_ACTIONS.FETCH_SUCCESS,
    entries: entries
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
        return dispatch(fetchDataSuccess(response.data));
      }).catch(error => {
      console.log(error);
      return dispatch(fetchDataFailed());
    });
  }
}

export function updateField(name, value){
  return dispatch => {
    return dispatch({
      type: LOGS_ACTIONS.UPDATE_FIELD,
      name: name,
      value: value
    })
  }
}

export function updateModalState(modalState){
  return dispatch => {
    return dispatch({
      type: LOGS_ACTIONS.MODAL_STATE_CHANGED,
      modalState: modalState
    })
  }
}

export function clearFields(){
  return dispatch => {
    return dispatch({
      type: LOGS_ACTIONS.CLEAR_FIELDS
    });
  }
}

export function initUpdateForm(entryData){
  return dispatch => {
    return dispatch({
      type: LOGS_ACTIONS.INIT_UPDATE_FORM,
      entryData: entryData
    });
  }
}
