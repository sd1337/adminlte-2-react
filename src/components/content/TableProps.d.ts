import { ReactElement } from 'react';
export type DataType = {
    [key: string]: any;
};
export type ColumnType = {
    title: string;
    data: string;
    width?: string;
    render?: (data: any, rowData: DataType, rowIdx: number) => ReactElement;
};
export type SelectedRowType = number | string | number[] | string[];
//# sourceMappingURL=TableProps.d.ts.map