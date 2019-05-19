import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';

const Badge = ({ color, text, id }) => (
  <span id={id} className={`badge bg-${color}`}>{text}</span>
);

Badge.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Colors).isRequired,
  text: PropTypes.string,
};

Badge.defaultProps = {
  id: undefined,
  text: null,
};

export default Badge;
