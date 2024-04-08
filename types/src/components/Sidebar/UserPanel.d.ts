import React, { Component } from 'react';
import { Types } from '../PropTypes';
import './UserPanel.css';
interface UserPanelProps {
    username: string;
    imageUrl?: string;
    link: string;
    status: string;
    statusType: Types;
}
declare class UserPanel extends Component<UserPanelProps, {}> {
    static defaultProps: {
        imageUrl: undefined;
        link: string;
        status: string;
        statusType: string;
    };
    state: {};
    render(): React.JSX.Element;
}
export default UserPanel;
//# sourceMappingURL=UserPanel.d.ts.map