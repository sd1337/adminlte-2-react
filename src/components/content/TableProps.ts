import { ReactElement } from 'react';

 type ColumnType = {
   title: string;
   data: string;
   width?: string;
   render?: (data: any, rowData: DataType, rowIdx: number) => ReactElement;
 };

type DataType = {
  [key: string]: any,
};

type SelectedRowType = number | string | number[] | string[];

export { ColumnType, DataType, SelectedRowType };
