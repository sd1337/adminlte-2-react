import React from 'react';
import { Colors } from '../PropTypes';
interface DescriptionBlockProps {
    id?: string;
    percentage: number;
    percentageColor: Colors;
    header: string;
    text: string;
    indication: 'left' | 'right' | 'up' | 'down';
}
type DescriptionBlockComponent = React.FC<DescriptionBlockProps>;
declare const DescriptionBlock: DescriptionBlockComponent;
export default DescriptionBlock;
//# sourceMappingURL=DescriptionBlock.d.ts.map