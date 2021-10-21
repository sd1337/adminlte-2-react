import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { splitIcon } from '../Utilities';
import { Colors } from '../PropTypes';

interface NavListItemProps {
  icon?: string,
  text?: string,
  iconLabel?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
  color?: Colors,
  to?: string,
}

type NavListItemComponent = React.FC<NavListItemProps>;

const NavListItem: NavListItemComponent = ({
  icon, text, iconLabel, onClick, color = 'red', to,
}: NavListItemProps) => {
  const localIcon = splitIcon(icon);
  let jsxElement = (
    <>
      {text}
      <span className={`pull-right text-${color}`}>
        <FontAwesomeIcon icon={localIcon} />
        {' '}
        {iconLabel}
      </span>
    </>
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

NavListItem.defaultProps = {
  icon: 'far-circle',
  text: undefined,
  iconLabel: undefined,
  onClick: undefined,
  color: 'red',
  to: undefined,
};

export default NavListItem;
