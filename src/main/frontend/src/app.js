import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./modules/shared/components/Layout";
import Logs from "./modules/shared/pages/Logs"
import Summary from "./modules/shared/pages/Summary";
import Savings from "./modules/shared/pages/Savings";
import Settings from "./modules/shared/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Logs} name="logs" />
      <Route path="summary" component={Summary} name="summary" />
      <Route path="savings" component={Savings} name="savings" />
      <Route path="settings" component={Settings} name="settings" />
      {/*<Route path="income/:mode/:id" components={Income} name="income"/>*/}
    </Route>
  </Router>
, app);
