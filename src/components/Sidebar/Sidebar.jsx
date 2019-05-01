/* eslint-disable max-len */
import React, { Component } from 'react';
import jQuery from 'jquery';

import Item from './Item';
import Header from './Header';
import UserPanel from './UserPanel';
import Searchbar from './Searchbar';

class Sidebar extends Component {
  state = {}

  componentDidMount() {
    jQuery(this.widgetReference).tree();
  }

  render() {
    const { children } = this.props;
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree" ref={(c) => { this.widgetReference = c; }}>
            {children}
          </ul>
        </section>
      </aside>
    );
  }
}

Sidebar.defaultProps = {
  children: null,
};

Sidebar.propTypes = {
  children(props, propName, componentName) {
    const prop = props[propName];
    let error;
    React.Children.forEach(prop, (el) => {
      if (error) return;
      if (el.type !== Item && el.type !== Header && el.type !== 'li' && el.type !== UserPanel && el.type !== Searchbar) {
        error = new Error(
          `\`${componentName}\` only accepts \`Item's, Header's, UserPanel, Searchbar and li's\`.`,
        );
      }
    });
    return error;
  },
};
export default Sidebar;
export {
  Item, Sidebar as Core, Header, UserPanel, Searchbar,
};
