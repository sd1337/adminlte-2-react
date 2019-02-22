import React from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';
import MessageItem from './MessageItem';
import NotificationItem from './NotificationItem';
import TaskItem from './TaskItem';
import ControlSidebarEntry from './ControlSidebarEntry';

const Navbar = ({ additionalMenus, children }) => (
  <ul className="nav navbar-nav">
    {children}
    {additionalMenus}
  </ul>
);


Navbar.propTypes = {
  additionalMenus: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Navbar.defaultProps = {
  additionalMenus: null,
  children: null,
};

export {
  Navbar as Core, Entry, MessageItem, NotificationItem, TaskItem, ControlSidebarEntry,
};// ;default Menu;
