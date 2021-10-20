import React, { ReactNode } from 'react';
import Entry from './Entry';
import MessageItem from './MessageItem';
import NotificationItem from './NotificationItem';
import TaskItem from './TaskItem';
import ControlSidebarEntry from './ControlSidebarEntry';

interface NavbarProps {
  additionalMenus?: ReactNode,
  children?: ReactNode
}

type NavbarComponent = React.FC<NavbarProps>;

const Navbar: NavbarComponent = ({ additionalMenus, children }: NavbarProps) => (
  <ul className="nav navbar-nav">
    {children}
    {additionalMenus}
  </ul>
);

Navbar.defaultProps = {
  additionalMenus: null,
  children: null,
};

export {
  Navbar as Core, Entry, MessageItem, NotificationItem, TaskItem, ControlSidebarEntry,
};
