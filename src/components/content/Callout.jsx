import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';


const Callout = ({ title, children, type = 'default' }) => (
  <div className={`callout callout-${type}`}>
    <h4>{title}</h4>

    <p>{children}</p>
  </div>
);

Callout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(Types),
};

Callout.defaultProps = {
  title: null,
  children: null,
  type: null,
};

export default Callout;
