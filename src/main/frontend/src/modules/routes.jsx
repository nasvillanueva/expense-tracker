import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Layout from './shared/components/Layout';
import Logs from './logs/containers/LogsContainer';

export default function initRoutes(store, history) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Logs} name="logs"/>
        </Route>
      </Router>
    </Provider>
  );
}

