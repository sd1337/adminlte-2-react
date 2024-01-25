import React, { Component } from 'react';
import { SmartColumnType, SmartOrderType, SmartTableHeaderSortIcons, SmartTableOrderChangedCallback } from './SmartTableTypes';
interface SmartTableHeaderProps {
    smartTableKey: string;
    column: SmartColumnType;
    classPreFix: string;
    sortIcons: SmartTableHeaderSortIcons;
    order: SmartOrderType[];
    orderChanged: SmartTableOrderChangedCallback;
}
interface SmartTableHeaderState {
    open: boolean;
}
declare class SmartTableHeader extends Component<SmartTableHeaderProps, SmartTableHeaderState> {
    state: {
        open: boolean;
    };
    toggleOpen: () => void;
    render(): React.JSX.Element;
}
export default SmartTableHeader;
//# sourceMappingURL=SmartTableHeader.d.ts.map