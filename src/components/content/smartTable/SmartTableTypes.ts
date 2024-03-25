import React, { ReactElement } from 'react';
import { DataType } from '../TableProps';

export interface SmartTableHeaderSortIcons {
  up: ReactElement
  down: ReactElement
  default: ReactElement
}

export type SmartColumnType = {
  title: string;
  data: string;
  width?: string;
  render?: (data: any, rowData: DataType, rowIdx: number) => React.JSX.Element | false | string | null;
  toggleHidden?: boolean;
  toggleOrder?: boolean;
  order?: SmartTableOrderDirection;
  hidden?: boolean;
  rawValue?: (data: any, rowData: DataType) => string | number;
  onFilter?: (data: string, value: string) => boolean;
};

export interface SmartOrderType {
  column: string;
  direction: SmartTableOrderDirection;
}

export interface SmartPagination {
  pageSize?: number,
  totalElements: number,
  activePage: number,
}

export interface SmartTableModalParams {
  component?: any,
  props?: DataType,
  title?: string,
}

export type MappedColumnType = {
  [key: string]: SmartColumnType,
};

export type SmartTableOrderDirection = 'asc' | 'desc';

export type SmartTableHeaderOrderDirection = 'asc' | 'desc' | 'none';

export type SmartTableOrderChangedCallback = (data: string, order: SmartTableHeaderOrderDirection) => void;
