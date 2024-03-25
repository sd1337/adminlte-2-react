import React from 'react';
import { Colors } from '../PropTypes';
interface ProgressGroupProps {
    currentValue: number;
    maxValue: number;
    color: Colors;
    text?: string;
}
type ProgressGroupComponent = React.FC<ProgressGroupProps>;
declare const ProgressGroup: ProgressGroupComponent;
export default ProgressGroup;
//# sourceMappingURL=ProgressGroup.d.ts.map