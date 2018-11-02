import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';

const Badge = ({ color, text }) => (
  <span className={`badge bg-${color}`}>{text}</span>
);

Badge.propTypes = {
  color: PropTypes.oneOf(Colors).isRequired,
  text: PropTypes.string,
};

Badge.defaultProps = {
  text: null,
};

export default Badge;
