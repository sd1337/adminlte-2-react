import React, { MouseEventHandler } from 'react';
import './NotificationItem.css';
import { Colors } from '../PropTypes';
interface NotificationItemProps {
    icon?: string;
    iconColor?: Colors;
    text: string;
    to?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
declare type NotificationItemComponent = React.FC<NotificationItemProps>;
declare const NotificationItem: NotificationItemComponent;
export default NotificationItem;
//# sourceMappingURL=NotificationItem.d.ts.map