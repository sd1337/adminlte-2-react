import React, { ReactNode } from 'react';
import Entry from './Entry';
import MessageItem from './MessageItem';
import NotificationItem from './NotificationItem';
import TaskItem from './TaskItem';
import ControlSidebarEntry from './ControlSidebarEntry';
interface NavbarProps {
    additionalMenus?: ReactNode;
    children?: ReactNode;
}
type NavbarComponent = React.FC<NavbarProps>;
declare const Navbar: NavbarComponent;
export { Navbar as Core, Entry, MessageItem, NotificationItem, TaskItem, ControlSidebarEntry, };
//# sourceMappingURL=Navbar.d.ts.map