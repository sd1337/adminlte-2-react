import React, { Component } from 'react';
import { TabContentProps } from './TabContent';
interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    onSelect?: Function;
    children: React.ReactElement<TabContentProps> | React.ReactElement<TabContentProps>[];
    pullRight?: boolean;
    contentHeight: number | string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    id?: string;
    icon?: string;
    title?: string;
    titleLeft?: boolean;
    onChange?: Function;
}
interface TabsState {
    stateActiveKey?: string;
}
declare class Tabs extends Component<TabsProps, TabsState> {
    static defaultProps: {
        activeKey: null;
        defaultActiveKey: null;
        onSelect: null;
        pullRight: boolean;
        contentHeight: null;
        mountOnEnter: boolean;
        unmountOnExit: boolean;
        id: string;
        icon: null;
        title: null;
        titleLeft: boolean;
        onChange: undefined;
    };
    constructor(props: TabsProps);
    onSelect(activeKeyParam: string): void;
    render(): React.JSX.Element;
}
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map