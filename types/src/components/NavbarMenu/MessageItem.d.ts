import React, { MouseEventHandler } from 'react';
import * as MomentNS from 'moment';
import './MessageItem.css';
type WhenFormatsType = {
    minutes: string;
    hours: string;
    today: string;
    yesterday: string;
    days: string;
};
interface MessageItemProps {
    imageUrl?: string;
    imageAlt?: string;
    text: string;
    subText?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    when?: MomentNS.Moment;
    whenFormats?: WhenFormatsType;
}
type MessageItemComponent = React.FC<MessageItemProps>;
declare const MessageItem: MessageItemComponent;
export default MessageItem;
//# sourceMappingURL=MessageItem.d.ts.map