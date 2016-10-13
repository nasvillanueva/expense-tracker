import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Layout from './shared/components/Layout';
import Logs from './logs/containers/LogsContainer';
import Summary from './summary/containers/SummaryContainer';
import AddIncome from './logs/components/AddIncomeComponent';

export default function initRoutes(store, history) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Logs} name="logs"/>
          <Route path="summary" component={Summary} name="summary" />
          <Route path="add/income" component={AddIncome} name="addIncome" />
        </Route>
      </Router>
    </Provider>
  );
}

