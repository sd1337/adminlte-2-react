import { Component } from 'react';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-select-bs/css/select.bootstrap.css';
import './DataTable.css';
import { ColumnType, DataType, SelectedRowType } from './TableProps';
declare type OnClickEvents = {
    [key: string]: Function;
};
declare type OrderType = {
    direction: 'asc' | 'desc';
    column?: string;
    index?: number;
};
interface DataTableProps {
    id?: string;
    options: any;
    ajaxMap?: Function;
    ajaxResponseMap?: Function;
    data?: DataType[];
    columns?: ColumnType[];
    setDataTableRef?: Function;
    onSelect?: Function;
    onDeselect?: Function;
    footer?: boolean;
    hover?: boolean;
    border?: boolean;
    condensed?: boolean;
    selectedRows: SelectedRowType;
    onClickEvents?: OnClickEvents;
    page?: number;
    totalElements?: number;
    pageSize?: number;
    onPageChange?: Function;
    onOrderChange?: Function;
    hasMore?: boolean;
    order?: OrderType[];
    onSearchChange?: Function;
    searchValue?: string;
}
interface DataTableState {
    options: any;
    page: number;
    domNode?: JSX.Element;
    order?: OrderType;
}
declare class DataTable extends Component<DataTableProps, DataTableState> {
    static defaultProps: {
        id: undefined;
        ajaxMap: null;
        ajaxResponseMap: null;
        data: null;
        columns: null;
        setDataTableRef: null;
        onSelect: null;
        onDeselect: null;
        footer: boolean;
        hover: boolean;
        border: boolean;
        condensed: boolean;
        selectedRows: null;
        onClickEvents: null;
        page: null;
        totalElements: null;
        pageSize: null;
        onPageChange: null;
        onOrderChange: null;
        hasMore: undefined;
        order: undefined;
        onSearchChange: undefined;
        searchValue: undefined;
    };
    constructor(props: DataTableProps);
    state: DataTableState;
    componentDidMount(): void;
    shouldComponentUpdate({ data, selectedRows, footer, options, page: oldPage, order, totalElements, hasMore, searchValue, }: DataTableProps, { order: oldStateOrder }: DataTableState): boolean;
    componentDidUpdate({ data: oldData, footer: oldFooter, selectedRows: oldSelectedRows, order: oldOrder, hasMore: oldHasMore, totalElements: oldTe, searchValue: oldSearchValue, }: DataTableProps): void;
    componentWillUnmount(): void;
    setActivePage(page: number, skipDraw?: boolean): void;
    controlled: boolean | undefined;
    main: HTMLTableElement | null;
    api: any | undefined;
    disableRowSelectEvent: boolean;
    selectRows(dataChanged?: boolean, oldSelectedRows?: SelectedRowType): void;
    initializeDatatables(): void;
    orderToExternal(order: any): any;
    orderToInternal(order?: OrderType[]): any[][] | undefined;
    destroyDatatables(): void;
    createDomObject(): JSX.Element;
    bindOnClickEvents(onClickEvents: OnClickEvents, api: any): void;
    renderPagination(): JSX.Element;
    render(): JSX.Element;
}
export default DataTable;
//# sourceMappingURL=DataTable.d.ts.map