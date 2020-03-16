import { Router, Route } from 'react-router-dom';
import App from 'components/App';
import Home from 'components/Home';
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
