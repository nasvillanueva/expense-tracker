import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./modules/shared/components/Layout";
import Logs from "./modules/shared/pages/Logs"
import Summary from "./modules/shared/pages/Summary";
import Savings from "./modules/shared/pages/Savings";
import Settings from "./modules/shared/pages/Settings";
import Income from "./modules/income/components/Income";
import Expense from "./modules/expense/components/Expense";
import AddSavings from "./modules/savings/components/Savings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Logs} name="logs" />
      <Route path="summary" component={Summary} name="summary" />
      <Route path="savings" component={Savings} name="summary" />
      <Route path="settings" component={Settings} name="settings" />
      <Route path="income/add" component={Income} name="income" />
      <Route path="expense/add" component={Expense} name="expense" />
      <Route path="savings/add" component={AddSavings} name="addSavings" />
      {/*<Route path="income/:mode/:id" components={Income} name="income"/>*/}
    </Route>
  </Router>
, app);
