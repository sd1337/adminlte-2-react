import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../PropTypes';


const SimpleItem = ({
  iconClass, iconColor, children, to,
}) => (
  <li>
    <a href={to}>
      <i className={`fa ${iconClass} text-${iconColor}`} />
      {' '}
      {children}
    </a>
  </li>
);

SimpleItem.propTypes = {
  iconClass: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(Colors).isRequired,
  /* TODO: make children prop more specific */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.string,
};

SimpleItem.defaultProps = {
  children: null,
  to: '/',
};


export default SimpleItem;
