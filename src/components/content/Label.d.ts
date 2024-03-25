import { ReactNode, ReactElement } from 'react';
import { Types } from '../PropTypes';
interface Props {
    id?: string;
    type: Types;
    pullRight?: boolean;
    children?: ReactNode;
}
declare function Label({ id, type, pullRight, children, }: Props): ReactElement;
declare namespace Label {
    var defaultProps: {
        id: undefined;
        children: null;
        pullRight: boolean;
    };
}
export default Label;
//# sourceMappingURL=Label.d.ts.map