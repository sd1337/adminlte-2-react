import { ReactElement } from 'react';
import { ColumnType } from '../../TableProps';

export interface SortIcons {
  up: ReactElement
  down: ReactElement
  default: ReactElement
}

export type SmartColumnType = ColumnType & {
  toggleHidden?: boolean;
  toggleOrder?: boolean;
  order?: 'asc' | 'desc';
  hidden?: boolean;
};

export interface SmartOrderType {
  column: string;
  direction: 'asc' | 'desc';
}

export interface SmartPagination {
  pageSize?: number,
  totalElements: number,
  activePage: number,
}
