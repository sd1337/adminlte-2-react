import React from 'react';
import { Colors } from '../PropTypes';
interface SparklineBoxProps {
    header?: string;
    text?: string;
    chartData: number[];
    color?: Colors;
}
type SparklineBoxComponent = React.FC<SparklineBoxProps>;
declare const SparklineBox: SparklineBoxComponent;
export default SparklineBox;
//# sourceMappingURL=SparklineBox.d.ts.map