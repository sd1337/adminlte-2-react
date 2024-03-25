import React, { MouseEventHandler } from 'react';
import { Colors } from '../PropTypes';
interface NavListItemProps {
    icon?: string;
    text?: string;
    iconLabel?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    color?: Colors;
    to?: string;
}
type NavListItemComponent = React.FC<NavListItemProps>;
declare const NavListItem: NavListItemComponent;
export default NavListItem;
//# sourceMappingURL=NavListItem.d.ts.map