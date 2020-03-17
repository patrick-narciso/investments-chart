/* eslint-disable react/destructuring-assignment */
import React from 'react';
import enzyme from 'enzyme';

import * as REACT_REDUX from 'react-redux';
import * as REDUX from 'redux';

/**
 * These are just some default values, can (and if you are using it, must)
 * be replaced during the spec.
 */
REACT_REDUX.useDispatch = () => jest.fn();
REACT_REDUX.useStore = () => jest.fn();
REACT_REDUX.useSelector = () => jest.fn();
REDUX.bindActionCreators = () => () => jest.fn();

const HookWrapper = props => {
  const hook = props.hook ? props.hook() : undefined;
  return <div id="hook" hook={hook} />;
};

const setUpHook = (hook, type = 'shallow') => (...args) => {
  const wrapper = enzyme[type](<HookWrapper hook={() => hook(...args)} />);

  return () => wrapper.find('#hook').props().hook;
};

export const setUpHookWithComponent = (hook, type = 'shallow') => (...args) => {
  const wrapper = enzyme[type](<HookWrapper hook={() => hook(...args)} />);

  return {
    getHook: () => wrapper.find('#hook').props().hook,
    getComponent: () => wrapper,
  };
};

export default setUpHook;
