import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './MenuItem.css';
import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';


const MenuItem = ({
  icon, iconColor, text, to, onClick,
}) => {
  const hasIcon = !!(icon);
  const localIcon = hasIcon ? splitIcon(icon) : null;
  return (
    <li className="menu-item">
      {to ? (
        <Link to={to}>
          <FontAwesomeIcon icon={localIcon} className={`text-${iconColor}`} />
          <span style={{ paddingLeft: '5px' }}>{` ${text}`}</span>
        </Link>
      ) : (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={onClick}>
          <FontAwesomeIcon icon={localIcon} className={`text-${iconColor}`} />
          <span style={{ paddingLeft: '5px' }}>{` ${text}`}</span>
        </div>
      )
      }
    </li>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(Colors).isRequired,
  /* TODO: make children prop more specific */
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  to: undefined,
  onClick: undefined,
};


export default MenuItem;
