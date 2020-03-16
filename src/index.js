import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from 'redux/store';
import Router from 'components/Routes';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
