import { fetchData, getBalance } from '../actions/SummaryActions';
import { connect } from 'react-redux';
import SummaryComponent from '../components/SummaryComponent';

export const mapStateProps = (state) => {
  return {
    summary: state.summary
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (category) => {
      dispatch(fetchData(category));
    },
    getBalance: () => {
      dispatch(getBalance());
    }
  }
};

export default connect(mapStateProps, mapDispatchToProps)(SummaryComponent);