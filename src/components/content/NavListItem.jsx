import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavListItem = ({
  icon, text, iconLabel, onClick, color = 'red', to,
}) => {
  localIcon = splitIcon(icon);
  return(
  <li>
    <a href={to} onClick={onClick}>
      {text}
      <span className={`pull-right text-${color}`}>
        <FontAwesomeIcon icon={localIcon} />
        {' '}
        {iconLabel}
      </span>
    </a>
  </li>
)};

NavListItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  iconLabel: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(Colors),
  to: PropTypes.string.isRequired,
};

NavListItem.defaultProps = {
  icon: 'far-circle',
  text: null,
  iconLabel: null,
  onClick: null,
  color: 'red',
};

export default NavListItem;
