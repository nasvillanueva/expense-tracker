import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Layout from './shared/components/Layout';
import Logs from './logs/containers/LogsContainer';
import Summary from './summary/containers/SummaryContainer';
import AddIncome from './logs/components/AddIncomeComponent';
import AddExpense from './logs/components/AddExpenseComponent';
import AddSavings from './logs/components/AddSavingsComponent';

export default function initRoutes(store, history) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Logs} name="logs"/>
          <Route path="summary" component={Summary} name="summary" />
          <Route path="add/income" component={AddIncome} name="addIncome" />
          <Route path="add/expense" component={AddExpense} name="addExpense" />
          <Route path="add/savings" component={AddSavings} name="addSavings" />
        </Route>
      </Router>
    </Provider>
  );
}

