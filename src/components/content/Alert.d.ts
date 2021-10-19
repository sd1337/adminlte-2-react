import React, { Component } from 'react';
import { Types } from '../PropTypes';
import './Alert.css';
declare type Props = {
    id?: string;
    closable?: boolean;
    onDismiss?: Function;
    type?: Types;
    icon?: string;
    title?: string;
    children?: React.ReactNode | React.ReactNode[];
};
declare type State = {
    closed: boolean;
};
declare class Alert extends Component<Props, State> {
    static defaultProps: {
        id: undefined;
        closable: boolean;
        onDismiss: null;
        type: null;
        icon: null;
        title: null;
        children: null;
    };
    constructor(props: Props);
    onDismiss(): void;
    render(): false | JSX.Element;
}
export default Alert;
//# sourceMappingURL=Alert.d.ts.map