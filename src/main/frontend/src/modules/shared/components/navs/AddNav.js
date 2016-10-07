import React from "react";
import { IndexLink, Link } from "react-router";

export default class AddNav extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><IndexLink to="/income/add">Add Income</IndexLink></li>
          <li><Link to="/expense/add">Add Expense</Link></li>
          <li><Link to="/savings/add">Add Savings</Link></li>
        </ul>
      </nav>
    );
  }
}