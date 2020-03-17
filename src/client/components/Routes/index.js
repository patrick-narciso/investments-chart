import { Router, Route } from 'react-router-dom';
import App from 'client/components/App';
import Home from 'client/components/Home';
import React from 'react';
import history from './history';

const RouterComponent = () => (
  <Router history={history}>
    <App>
      <Route path="/" component={Home} exact />
    </App>
  </Router>
);

export default RouterComponent;
