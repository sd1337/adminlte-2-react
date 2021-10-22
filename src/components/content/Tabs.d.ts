import { Component } from 'react';
import TabContent from './TabContent';
declare type TabContentType = typeof TabContent;
interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    onSelect?: Function;
    children: TabContentType | TabContentType[];
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
    render(): JSX.Element;
}
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map