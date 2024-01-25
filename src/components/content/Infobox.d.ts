import React, { ReactNode } from 'react';
import './Infobox.css';
import { Colors } from '../PropTypes';
interface InfoboxProps {
    id?: string;
    icon: string;
    text?: string;
    number?: string | ReactNode | string[] | ReactNode[];
    color?: Colors;
    progress?: number;
    progressText?: string;
    iconColorOnly?: boolean;
}
type InfoboxComponent = React.FC<InfoboxProps>;
declare const Infobox: InfoboxComponent;
export default Infobox;
//# sourceMappingURL=Infobox.d.ts.map