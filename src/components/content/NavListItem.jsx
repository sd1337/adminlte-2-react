import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';

const NavListItem = ({
  iconClass, text, iconLabel, onClick, color = 'red', to,
}) => (
  <li>
    <a href={to} onClick={onClick}>
      {text}
      <span className={`pull-right text-${color}`}>
        <i className={`fa ${iconClass}`} />
        {' '}
        {iconLabel}
      </span>
    </a>
  </li>
);

NavListItem.propTypes = {
  iconClass: PropTypes.string,
  text: PropTypes.string,
  iconLabel: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(Colors),
  to: PropTypes.string.isRequired,
};

NavListItem.defaultProps = {
  iconClass: 'fa-circle-o',
  text: null,
  iconLabel: null,
  onClick: null,
  color: 'red',
};

export default NavListItem;
