import React, { MouseEventHandler } from 'react';
import './Infobox2.css';
import { Colors } from '../PropTypes';
interface Infobox2Props {
    id?: string;
    color?: Colors;
    title?: string;
    subTitle?: string;
    text?: string;
    footerText?: string;
    icon: string;
    footerIcon?: string;
    onFooterClick?: MouseEventHandler<HTMLAnchorElement>;
    to?: string;
}
declare type Infobox2Component = React.FC<Infobox2Props>;
declare const Infobox2: Infobox2Component;
export default Infobox2;
//# sourceMappingURL=Infobox2.d.ts.map