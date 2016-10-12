import React, {PropTypes, Component} from 'react';
import { CATEGORY } from '../../constants';
import SummaryChart from "./SummaryChart";

export default class SummaryComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.initData();
  }

  initData(){
    [CATEGORY.INCOME, CATEGORY.EXPENSE, CATEGORY.SAVINGS].forEach(category => {
      this.props.fetchData(category);
    })
  }

  render(){
    let store = this.props.summary;
    let total = store.total;
    let label = ["Income", "Expense", "Savings"];
    let data = [total.income, total.expense, total.savings];
    return (
      <div className="charts">
        <SummaryChart label={label} data={data}/>
      </div>
    );
  }
}

SummaryComponent.propTypes = {
  fetchData: PropTypes.func,
  summary: PropTypes.object
};