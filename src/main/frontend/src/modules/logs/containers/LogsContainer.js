import { fetchData } from '../actions/LogsActions';
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
    }
  }
};

export default connect(mapStateProps, mapDispatchToProps)(LogsComponent);