import React from 'react';

export type DataType = {
  [key: string]: any,
};

export type ColumnType = {
  title: string;
  data: string;
  width?: string;
  className?: string;
  bSortable?: boolean;
  render?: (data: any, rowIdx: number, rowData: DataType) => React.JSX.Element | false | string | null;
};

export type SelectedRowType = number | string | number[] | string[];
