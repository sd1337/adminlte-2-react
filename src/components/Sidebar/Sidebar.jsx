/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jQuery from 'jquery';

import './Sidebar.css';

import Item from './Item';
import Header from './Header';
import UserPanel from './UserPanel';
import Searchbar from './Searchbar';

class Sidebar extends Component {
  state = {
    searchValue: '',
  }

  constructor() {
    super();
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
  }

  componentDidMount() {
    jQuery(this.widgetReference).tree();
  }

  onSearchValueChange({ target: { value } }) {
    this.setState({ searchValue: value });
  }

  render() {
    const { children, searchbarFilter } = this.props;
    let localChildren;
    if (children) {
      localChildren = children.length ? children : [children];
    } else {
      localChildren = [];
    }
    if (searchbarFilter) {
      const localSearchbar = localChildren.find(p => p.type === Searchbar);
      if (localSearchbar) {
        const index = localChildren.map(p => p.type).indexOf(Searchbar);
        const temp = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < localChildren.length; ++i) {
          if (i !== index) {
            temp.push(localChildren[i]);
          } else {
            const { onChange, ...tempProps } = localSearchbar.props;
            temp.push(React.cloneElement(localSearchbar, { onChange: this.onSearchValueChange, ...tempProps }));
          }
        }
        localChildren = temp;
        const { searchValue } = this.state;
        if (searchValue.length > 0) {
          const flatten = function flatten(element) {
            if (!element.props) {
              return [];
            }
            const { children: elemChildren, ...otherProps } = element.props;
            const elemWithoutChildren = React.cloneElement(element, otherProps, null);
            if (elemChildren) {
              let intermediate;
              if (typeof elemChildren !== 'string' && elemChildren.length) {
                intermediate = elemChildren.map(flatten).flat();
              } else {
                intermediate = flatten(elemChildren);
              }
              intermediate.push(elemWithoutChildren);
              return intermediate;
            }
            return [elemWithoutChildren];
          };
          const flattenChildren = localChildren.filter(p => p.type === Item).map(flatten).flat().filter(p => p.props.to);
          const others = localChildren.filter(p => p.type === UserPanel || p.type === Searchbar);
          localChildren = others.concat(flattenChildren
            .filter(p => p.props.text.toUpperCase().indexOf(searchValue.toUpperCase()) > -1));
        }
      }
    }
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree" ref={(c) => { this.widgetReference = c; }}>
            {localChildren}
          </ul>
        </section>
      </aside>
    );
  }
}

Sidebar.defaultProps = {
  children: null,
  searchbarFilter: false,
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
  searchbarFilter: PropTypes.bool,
};
export default Sidebar;
export {
  Item, Sidebar as Core, Header, UserPanel, Searchbar,
};
