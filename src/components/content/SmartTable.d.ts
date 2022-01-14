import { Component, ReactElement } from 'react';
import { ColumnType, DataType } from './TableProps';
import './SmartTable.css';
import { SmartColumnType, SmartOrderType, SmartPagination, SmartTableOrderChangedCallback, SmartTableHeaderOrderDirection, SmartTableModalParams } from './smartTable/SmartTableTypes';
interface SmartTableProps {
    data: DataType[];
    columns: SmartColumnType[];
    condensed?: boolean;
    striped?: boolean;
    noMargin?: boolean;
    border?: boolean;
    responsive?: boolean;
    hover?: boolean;
    onRowSelect?: (data?: DataType, index?: number) => void;
    onRowDeselect?: (data?: DataType, index?: number) => void;
    onSearchChange?: Function;
    onSearch?: Function;
    defaultFilterColumn?: string;
    pageSize?: number;
    page?: number;
    totalElements?: number;
    hasMore?: boolean;
    onPageChange?: Function;
    filterExternal?: boolean;
    onOrderChange?: Function;
    select?: 'single' | 'multiple';
}
interface SmartTableState {
    key: string;
    columns: SmartColumnType[];
    filterColumn?: string;
    placeholder: string;
    actions: ReactElement[];
    searchButtons: ReactElement[];
    pagination: SmartPagination;
    order: SmartOrderType[];
    selectedRow?: number;
    selectedRows: number[];
    selectedRowsData: DataType[];
    modal: SmartTableModalParams;
    hiddenColumns: string[];
    headers?: ReactElement[];
    mappedData: ReactElement[] | ReactElement;
    filteredData?: DataType[];
    filter?: {
        data: string;
        value: string;
    };
}
declare class SmartTable extends Component<SmartTableProps, SmartTableState> {
    static columnsFromData(data: DataType[]): SmartColumnType[];
    static headersFromColumns(columns: SmartColumnType[], key: string, order: SmartOrderType[], orderChanged: SmartTableOrderChangedCallback, setFilterValue: (temp: any) => void, hiddenColumns: string[]): ReactElement[];
    static searchButtonsFromColumns(columns: SmartColumnType[], filterColumn: string | undefined, setFilterColumn: (column: string, title?: string) => void): JSX.Element[];
    static mapCell(data: any, column: ColumnType, rowData: DataType, rowIdx: number, key: string): JSX.Element;
    static defaultProps: {
        data: null;
        columns: undefined;
        condensed: boolean;
        striped: boolean;
        noMargin: boolean;
        border: boolean;
        responsive: boolean;
        hover: boolean;
        onRowSelect: undefined;
        onSearchChange: undefined;
        onSearch: undefined;
        defaultFilterColumn: string;
        pageSize: number;
        page: undefined;
        totalElements: undefined;
        hasMore: undefined;
        onPageChange: undefined;
        filterExternal: boolean;
        onOrderChange: undefined;
        select: string;
    };
    constructor(props: SmartTableProps);
    componentDidUpdate(prevProps: SmartTableProps, prevState: SmartTableState): void;
    handleCloseModal: () => void;
    handleAccept: (newState: any) => void;
    onFilterColumnChanged: (filterColumn: any, searchPlaceholder: any) => void;
    onOrderChanged: (column: string, direction: SmartTableHeaderOrderDirection) => void;
    onFilter: () => void;
    onRowSelect: (data?: DataType | undefined, rowIdx?: number | undefined) => void;
    onRowDeselect: (data: DataType, rowIdx: number) => void;
    onPageChange: (page: number) => void;
    setFilterValueAndFilter: (event: any) => void;
    setFilterValue: (event: any) => void;
    getColumns: () => SmartColumnType[];
    filterValue?: string;
    openColumnModal: () => void;
    mappedColumnsFromData: (data: DataType[], columns: SmartColumnType[] | undefined, pagination: any, hiddenColumns: string[], state: SmartTableState) => ReactElement[] | ReactElement;
    render(): JSX.Element;
}
export default SmartTable;
//# sourceMappingURL=SmartTable.d.ts.map