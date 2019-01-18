import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';

const NavListItem = ({
  icon, text, iconLabel, onClick, color = 'red', to,
}) => {
  const localIcon = splitIcon(icon);
  let jsxElement = (
    <React.Fragment>
      {text}
      <span className={`pull-right text-${color}`}>
        <FontAwesomeIcon icon={localIcon} />
        {' '}
        {iconLabel}
      </span>
    </React.Fragment>
  );
  if (to) {
    jsxElement = (
      <Link to={to}>
        {jsxElement}
      </Link>
    );
  } else {
    jsxElement = (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url
      <a href="javascript:void(0);" onClick={onClick}>
        {jsxElement}
      </a>
    );
  }
  return (
    <li>
      {jsxElement}
    </li>
  );
};

NavListItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  iconLabel: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(Colors),
  to: PropTypes.string,
};

NavListItem.defaultProps = {
  icon: 'far-circle',
  text: null,
  iconLabel: null,
  onClick: null,
  color: 'red',
  to: null,
};

export default NavListItem;
