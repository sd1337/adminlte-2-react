 type ColumnType = {
   title: string;
   data: string;
   width?: string;
   render?: Function;
 };

type DataType = {
  [key: string]: any,
};

type SelectedRowType = number | string | number[] | string[];

export { ColumnType, DataType, SelectedRowType };
