import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';

const Label = ({
  id, type, pullRight, children,
}) => (<span id={id} className={`label label-${type}${pullRight ? ' pull-right' : ''}`}>{children}</span>);

Label.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Types).isRequired,
  pullRight: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Label.defaultProps = {
  id: undefined,
  children: null,
  pullRight: false,
};

export default Label;
