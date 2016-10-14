import { fetchData, updateField, updateModalState, clearFields, initUpdateForm, prepareAddForm } from '../actions/LogsActions';
import { connect } from 'react-redux';
import LogsComponent from '../components/LogsComponent';

export const mapStateProps = (state) => {
  return {
    logs: state.logs
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
    updateField: (name, value) => {
      dispatch(updateField(name, value));
    },
    updateModalState: (modalState) => {
      dispatch(updateModalState(modalState));
    },
    clearFields: () => {
      dispatch(clearFields());
    },
    initUpdateForm: (entryData) => {
      dispatch(initUpdateForm(entryData));
    }
  }

};

export default connect(mapStateProps, mapDispatchToProps)(LogsComponent);