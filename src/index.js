import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from 'client/redux/store';
import Router from 'client/components/Routes';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
