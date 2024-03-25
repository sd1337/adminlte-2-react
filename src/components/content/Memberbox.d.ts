import React, { Component } from 'react';
import { Types } from '../PropTypes';
interface MemberboxProps {
    id?: string;
    type: Types;
    title?: string;
    collapsable?: boolean;
    closable?: boolean;
    async?: boolean;
    viewAllLink?: string;
}
interface MemberboxState {
    users: any;
}
declare class Memberbox extends Component<MemberboxProps, MemberboxState> {
    static defaultProps: {
        id: undefined;
        title: null;
        collapsable: boolean;
        closable: boolean;
        async: boolean;
        viewAllLink: string;
    };
    state: MemberboxState;
    componentDidMount(): void;
    getUser({ name, lastOnline, image }: any): React.JSX.Element;
    getUsers(users: any): any;
    users: {
        name: string;
        lastOnline: string;
        image: string;
    }[];
    render(): React.JSX.Element;
}
export default Memberbox;
//# sourceMappingURL=Memberbox.d.ts.map