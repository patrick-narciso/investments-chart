import PropTypes from 'prop-types';
import React from 'react';

const App = ({ children }) => {
  return <div>{children}</div>;
};
App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default App;
