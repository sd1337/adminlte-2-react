import { ReactElement, ReactNode } from 'react';
import { FormTypes } from '../../PropTypes';
type ColSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
    children?: ReactNode;
    labelClass?: string;
}
declare function Label({ label, labelXs, labelSm, labelMd, labelLg, name, xs, sm, md, lg, labelIcon, type, children, labelClass, labelPosition, }: LabelProps): ReactElement;
declare namespace Label {
    var defaultProps: {
        label: null;
        labelPosition: string;
        labelXs: undefined;
        labelSm: number;
        labelMd: undefined;
        labelLg: undefined;
        xs: undefined;
        sm: number;
        md: undefined;
        lg: undefined;
        labelIcon: undefined;
        type: undefined;
        name: string;
        labelClass: undefined;
    };
}
export default Label;
//# sourceMappingURL=Label.d.ts.map