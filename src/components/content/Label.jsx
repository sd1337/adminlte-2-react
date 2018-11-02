import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';

const Label = ({ type, children }) => (<span className={`label label-${type}`}>{children}</span>);

Label.propTypes = {
  type: PropTypes.oneOf(Types).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Label.defaultProps = {
  children: null,
};

export default Label;
