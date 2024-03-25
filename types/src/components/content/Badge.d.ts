import React from 'react';
import { Colors } from '../PropTypes';
interface BadgeProps {
    id?: string;
    color: Colors;
    text?: string;
}
type BadgeComponent = React.FC<BadgeProps>;
declare const Badge: BadgeComponent;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map