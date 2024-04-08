import React from 'react';
import { Types, Colors } from '../PropTypes';
interface ProgressBarProps {
    type?: Types;
    color?: Colors;
    striped?: boolean;
    min?: number;
    max?: number;
    text?: string;
    value: number;
    active?: boolean;
    sm?: boolean;
    xs?: boolean;
    xxs?: boolean;
    vertical?: boolean;
}
type ProgressBarComponent = React.FC<ProgressBarProps>;
declare const ProgressBar: ProgressBarComponent;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map