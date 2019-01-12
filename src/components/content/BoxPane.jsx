import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Colors } from '../AdminLTE';

const BoxPane = ({padding, color, children, side}) => {
  return ( 
    <div className={`${padding ? 'pad': ''} box-pane-${side} bg-${color}`}>
    {children}
    </div>
   );
}

BoxPane.propTypes = {
  color: PropTypes.oneOf(Colors).isRequired,
  side: PropTypes.string,
  padding: PropTypes.bool,
}

BoxPane.defaultProps = {
  side: 'right',
  padding: false,
}
 
export default BoxPane;