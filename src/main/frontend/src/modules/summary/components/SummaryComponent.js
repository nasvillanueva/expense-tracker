import React from 'react';
import { CATEGORY } from '../../constants';
import SummaryChart from "./SummaryChart";

export default class SummaryComponent extends React.Component {
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
    return (
      <div className="charts">
        <SummaryChart />
      </div>
    );
  }
}

// SummaryComponent.propTypes = {
//   fetchData: React.propTypes.func,
//   summary: React.propTypes.object
// }