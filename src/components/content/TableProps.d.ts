import { ReactElement } from 'react';
export declare type DataType = {
    [key: string]: any;
};
export declare type ColumnType = {
    title: string;
    data: string;
    width?: string;
    render?: (data: any, rowData: DataType, rowIdx: number) => ReactElement;
};
export declare type SelectedRowType = number | string | number[] | string[];
//# sourceMappingURL=TableProps.d.ts.map