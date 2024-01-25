import { ReactElement } from 'react';
import { ColumnType, DataType } from '../TableProps';
export interface SmartTableHeaderSortIcons {
    up: ReactElement;
    down: ReactElement;
    default: ReactElement;
}
export type SmartColumnType = ColumnType & {
    toggleHidden?: boolean;
    toggleOrder?: boolean;
    order?: SmartTableOrderDirection;
    hidden?: boolean;
    rawValue: any;
    onFilter: (data: string, value: string) => boolean;
};
export interface SmartOrderType {
    column: string;
    direction: SmartTableOrderDirection;
}
export interface SmartPagination {
    pageSize?: number;
    totalElements: number;
    activePage: number;
}
export interface SmartTableModalParams {
    component?: any;
    props?: DataType;
    title?: string;
}
export type MappedColumnType = {
    [key: string]: SmartColumnType;
};
export type SmartTableOrderDirection = 'asc' | 'desc';
export type SmartTableHeaderOrderDirection = 'asc' | 'desc' | 'none';
export type SmartTableOrderChangedCallback = (data: string, order: SmartTableHeaderOrderDirection) => void;
//# sourceMappingURL=SmartTableTypes.d.ts.map