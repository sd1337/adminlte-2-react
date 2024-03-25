import React, { Component } from 'react';
interface Props {
    component: any;
    props?: {
        [key: string]: any;
    };
    classPreFix: string;
    title: string;
    handleClose: Function;
    handleAccept: Function;
}
interface State {
}
declare class SmartTableModal extends Component<Props, State> {
    static defaultProps: {
        component: undefined;
        props: undefined;
        title: undefined;
    };
    handleAccept: () => void;
    handleClose: () => void;
    stateToUpdate: (newState: {
        [key: string]: any;
    }) => void;
    updatedatableState: {};
    render(): React.JSX.Element;
}
export default SmartTableModal;
//# sourceMappingURL=SmartTableModal.d.ts.map