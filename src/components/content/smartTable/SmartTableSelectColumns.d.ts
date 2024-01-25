import React, { Component } from 'react';
import { DraggableData, DraggableEvent } from 'react-draggable';
import { SmartColumnType, SmartOrderType } from './SmartTableTypes';
interface SmartTableSelectColumnsProps {
    columns: SmartColumnType[];
    order: SmartOrderType[];
    hiddenColumns: string[];
    stateToUpdate?: Function;
    classPreFix: string;
}
interface SmartTableSelectColumnsState {
    columns: SmartColumnType[];
    order: SmartOrderType[];
    hiddenColumns: string[];
    drag?: {
        index: number;
        offset: number;
    };
}
declare class SmartTableSelectColumns extends Component<SmartTableSelectColumnsProps, SmartTableSelectColumnsState> {
    static defaultProps: {
        stateToUpdate: undefined;
    };
    constructor(props: SmartTableSelectColumnsProps);
    handleStart: (_event: DraggableEvent, info: DraggableData) => void;
    handleStop: (_event: DraggableEvent, info: DraggableData) => void;
    handleDrag: (_event: DraggableEvent, info: DraggableData) => void;
    dragIndex?: number;
    toggleVisibility: (e: React.MouseEvent<HTMLInputElement>) => void;
    toggleOrder: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    render(): React.JSX.Element;
}
export default SmartTableSelectColumns;
//# sourceMappingURL=SmartTableSelectColumns.d.ts.map