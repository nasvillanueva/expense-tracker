import React from "react";
import { IndexLink, Link } from "react-router";

export default class AddNav extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><IndexLink to="/entry/addIncome">Add Income</IndexLink></li>
          <li><Link to="/entry/addExpense">Add Expense</Link></li>
          <li><Link to="/entry/addSavings">Add Savings</Link></li>
        </ul>
      </nav>
    );
  }
}