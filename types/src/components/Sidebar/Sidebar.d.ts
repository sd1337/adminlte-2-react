import React, { Component } from 'react';
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
    searchValue: string;
};
declare class Sidebar extends Component<SidebarProps, SidebarState> {
    static defaultProps: {
        children: null;
        searchbarFilter: boolean;
    };
    constructor(props: SidebarProps);
    componentDidMount(): void;
    onSearchValueChange(e: React.ChangeEvent<HTMLInputElement>): void;
    widgetReference: HTMLUListElement | null;
    render(): React.JSX.Element;
}
export default Sidebar;
export { Item, Sidebar as Core, Header, UserPanel, Searchbar, };
//# sourceMappingURL=Sidebar.d.ts.map