import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../AdminLTE';

const BoxPane = ({
  padding, color, children, side,
}) => (
  <div className={`${padding ? 'pad' : ''} box-pane-${side} bg-${color}`}>
    {children}
  </div>
);

BoxPane.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Colors).isRequired,
  side: PropTypes.string,
  padding: PropTypes.bool,
};

BoxPane.defaultProps = {
  children: null,
  side: 'right',
  padding: false,
};

export default BoxPane;
