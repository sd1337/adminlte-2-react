import { Component } from 'react';
import { Colors, Types } from '../PropTypes';
interface ChatboxProps {
    id?: string;
    type?: Types;
    badgeColor?: Colors;
    contactsTitle?: string;
    iconClass?: string;
    title?: string;
    titleRight?: boolean;
    collapsable?: boolean;
    closable?: boolean;
    async?: boolean;
    loaded?: boolean;
    noPadding?: boolean;
}
interface ChatboxState {
}
declare class Chatbox extends Component<ChatboxProps, ChatboxState> {
    static defaultProps: {
        id: undefined;
        type: null;
        badgeColor: null;
        contactsTitle: string;
        iconClass: null;
        title: null;
        titleRight: boolean;
        collapsable: boolean;
        closable: boolean;
        async: boolean;
        loaded: boolean;
        noPadding: boolean;
    };
    getMessage({ message, timestamp, user }: {
        message: string;
        timestamp: string;
        user: string;
    }, users: any): JSX.Element;
    getMessages(): JSX.Element;
    getFooter(): JSX.Element;
    getBadge(): JSX.Element;
    getContactsToggle(): JSX.Element;
    getContact({ name, image, lastTimestamp, lastMessage, to, }: any): JSX.Element;
    getContacts(): JSX.Element;
    activeUsers: {
        one: {
            name: string;
            image: string;
            side: string;
        };
        two: {
            name: string;
            image: string;
            side: string;
        };
    };
    messages: {
        message: string;
        timestamp: string;
        user: string;
    }[];
    contacts: {
        name: string;
        image: string;
        lastTimestamp: string;
        lastMessage: string;
    }[];
    render(): JSX.Element;
}
export default Chatbox;
//# sourceMappingURL=Chatbox.d.ts.map