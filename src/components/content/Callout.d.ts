import React, { ReactNode } from 'react';
import { Types } from '../PropTypes';
interface CalloutProps {
    id?: string;
    title?: string;
    children?: ReactNode;
    type?: Types;
}
type CalloutComponent = React.FC<CalloutProps>;
declare const Callout: CalloutComponent;
export default Callout;
//# sourceMappingURL=Callout.d.ts.map