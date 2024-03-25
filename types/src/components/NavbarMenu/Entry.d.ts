import React, { MouseEventHandler, ReactNode } from 'react';
import './Entry.css';
import { Types } from '../PropTypes';
interface EntryProps {
    icon?: string;
    labelType?: Types;
    labelValue?: number;
    headerText?: string;
    footerText?: string;
    onFooterClick?: MouseEventHandler<HTMLLIElement>;
    className?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLLIElement>;
}
type EntryComponent = React.FC<EntryProps>;
declare const Entry: EntryComponent;
export default Entry;
//# sourceMappingURL=Entry.d.ts.map