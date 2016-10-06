import React from "react";
import { IndexLink, Link } from "react-router";

export default class AddNav extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><IndexLink>Add Income</IndexLink></li>
          <li><Link>Add Expense</Link></li>
          <li><Link>Add Savings</Link></li>
        </ul>
      </nav>
    );
  }
}