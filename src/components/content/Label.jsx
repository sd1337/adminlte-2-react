import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';

const Label = ({ type, pullRight, children }) => (<span className={`label label-${type}${pullRight ? ' pull-right' : ''}`}>{children}</span>);

Label.propTypes = {
  type: PropTypes.oneOf(Types).isRequired,
  pullRight: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Label.defaultProps = {
  children: null,
  pullRight: false,
};

export default Label;
