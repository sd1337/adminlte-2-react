import React, { ReactNode } from 'react';
import { Colors } from '../PropTypes';
type BoxPaneComponent = React.FC<BoxPaneProps>;
interface BoxPaneProps {
    children: ReactNode;
    color: Colors;
    side?: string;
    padding?: boolean;
}
declare const BoxPane: BoxPaneComponent;
export default BoxPane;
//# sourceMappingURL=BoxPane.d.ts.map