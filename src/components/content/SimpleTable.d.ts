import React, { Component } from 'react';
import { ColumnType, DataType, SelectedRowType } from './TableProps';
interface SimpleTableProps {
    data?: DataType;
    columns: Array<ColumnType>;
    condensed?: boolean;
    striped?: boolean;
    noMargin?: boolean;
    border?: boolean;
    responsive?: boolean;
    hover?: boolean;
    onSelect?: Function;
    simpleCompare?: boolean;
}
interface SimpleTableState {
    key: string;
    selectedRow?: SelectedRowType;
    mappedData?: any;
}
declare class SimpleTable extends Component<SimpleTableProps, SimpleTableState> {
    static defaultProps: {
        data: null;
        columns: null;
        condensed: boolean;
        striped: boolean;
        noMargin: boolean;
        border: boolean;
        responsive: boolean;
        hover: boolean;
        onSelect: undefined;
        simpleCompare: boolean;
    };
    constructor(props: SimpleTableProps);
    state: SimpleTableState;
    componentDidUpdate({ data: oldData, }: SimpleTableProps, { selectedRow: oldSelectedRow }: SimpleTableState): void;
    onSelect: (data: DataType, rowIdx: number) => void;
    updateStateData: () => void;
    mapCell(data: any, column: any, rowData: any, rowIdx: number): React.JSX.Element;
    render(): React.JSX.Element;
}
export default SimpleTable;
//# sourceMappingURL=SimpleTable.d.ts.map