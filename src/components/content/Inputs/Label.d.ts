import React, { ReactNode } from 'react';
import { FormTypes } from '../../PropTypes';
declare type ColSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface LabelProps {
    label?: ReactNode;
    labelPosition?: 'above' | 'left' | 'none';
    labelXs?: ColSpacing;
    labelSm?: ColSpacing;
    labelMd?: ColSpacing;
    labelLg?: ColSpacing;
    name?: string;
    xs?: ColSpacing;
    sm?: ColSpacing;
    md?: ColSpacing;
    lg?: ColSpacing;
    labelIcon?: string;
    type?: FormTypes;
    children: ReactNode;
    labelClass?: string;
}
declare type LabelComponent = React.FC<LabelProps>;
declare const Label: LabelComponent;
export default Label;
//# sourceMappingURL=Label.d.ts.map