import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './NotificationItem.css';
import { splitIcon } from '../Utilities';
import { Colors } from '../PropTypes';

interface NotificationItemProps {
  icon?: string,
  iconColor?: Colors,
  text: string,
  to?: string,
  onClick?: MouseEventHandler<HTMLDivElement>
}

type NotificationItemComponent = React.FC<NotificationItemProps>;

const NotificationItem: NotificationItemComponent = ({
  icon, iconColor, text, to, onClick,
}: NotificationItemProps) => {
  const localIcon = splitIcon(icon);
  return (
    <li className="notification-item">
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
      )}
    </li>
  );
};

NotificationItem.defaultProps = {
  icon: undefined,
  iconColor: undefined,
  to: undefined,
  onClick: undefined,
};

export default NotificationItem;
