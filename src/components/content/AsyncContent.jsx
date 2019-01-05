import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AsyncComponent from '../AsyncComponent';


const AsyncContent = ({ paths, exact, component }) => (
  <Route
    path={paths}
    exact={exact}
    component={AsyncComponent(() => import(component))}
  />
);

AsyncContent.propTypes = {
  paths: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  exact: PropTypes.bool,
  component: PropTypes.string,
};

AsyncContent.defaultProps = {
  paths: null,
  exact: false,
  component: null,
};

export default AsyncComponent;
