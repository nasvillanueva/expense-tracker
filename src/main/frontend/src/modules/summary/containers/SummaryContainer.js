import { fetchData } from '../actions/SummaryActions';
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
    }
  }
};

export default connect(mapStateProps, mapDispatchToProps)(SummaryComponent);