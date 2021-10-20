/* eslint-disable max-len */
import React, { Component } from 'react';
import jQuery from 'jquery';

import './Sidebar.css';

import Item from './Item';
import Header from './Header';
import UserPanel from './UserPanel';
import Searchbar from './Searchbar';

type SidebarProps = {
  children: React.ReactNode;
  searchbarFilter: boolean;
};

type SidebarState = {
  searchValue: string
};

class Sidebar extends Component<SidebarProps, SidebarState> {
  static defaultProps = {
    children: null,
    searchbarFilter: false,
  };

  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
  }

  componentDidMount() {
    (jQuery((this.widgetReference as any)) as any).tree();
  }

  onSearchValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = e;
    this.setState({ searchValue: value });
  }

  widgetReference: HTMLUListElement | null = null;

  render() {
    const { children, searchbarFilter } = this.props;
    let localChildren: React.ReactNode[];
    if (children) {
      if (children as []) {
        localChildren = children as [];
      } else {
        localChildren = [(children as React.ReactNode)];
      }
    } else {
      localChildren = [];
    }
    if (searchbarFilter) {
      const localSearchbar: Searchbar = localChildren.find((p) => p instanceof Searchbar) as Searchbar;
      if (localSearchbar) {
        const index = localChildren.findIndex((p) => p instanceof Searchbar);
        const temp = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < localChildren.length; ++i) {
          if (i !== index) {
            temp.push(localChildren[i]);
          } else {
            const { onChange, ...tempProps } = localSearchbar.props;
            temp.push(React.cloneElement(localSearchbar as any, { onChange: this.onSearchValueChange, ...tempProps }));
          }
        }
        localChildren = temp;
        const { searchValue } = this.state;
        if (searchValue.length > 0) {
          const flatten = function flatten(element: React.ReactNode): any {
            if (!(element as React.ReactElement).props) {
              return [];
            }
            const { children: elemChildren, ...otherProps } = (element as React.ReactElement).props;
            const elemWithoutChildren = React.cloneElement((element as React.ReactElement), otherProps, null);
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
          const flattenChildren = localChildren
            .filter((p) => p instanceof Item)
            .map(flatten).flat().filter((p) => p.props.to);
          const others = localChildren.filter((p) => p instanceof UserPanel || p instanceof Searchbar);
          localChildren = others.concat(flattenChildren
            .filter((p) => p.props.text.toUpperCase().indexOf(searchValue.toUpperCase()) > -1));
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

export default Sidebar;
export {
  Item, Sidebar as Core, Header, UserPanel, Searchbar,
};
