import React from 'react';
import PropTypes from 'prop-types';
import MenuEntry from './MenuEntry';
import Item from './Item';
import SimpleItem from './SimpleItem';
import TaskItem from './TaskItem';
import ControlSidebarEntry from './ControlSidebarEntry';

const Menu = ({ additionalMenus, children }) => (
  <ul className="nav navbar-nav">
    {children}
    {additionalMenus}
  </ul>);


Menu.propTypes = {
  additionalMenus: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Menu.defaultProps = {
  additionalMenus: null,
  children: null,
};

export {
  Menu, MenuEntry, Item, SimpleItem, TaskItem, ControlSidebarEntry,
};// ;default Menu;
