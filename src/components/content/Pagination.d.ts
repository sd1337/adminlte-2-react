import React, { Component } from 'react';
import { Dictionary } from '../PropTypes';
interface PaginationProps {
    activePage?: number;
    totalElements?: number;
    pageSize?: number;
    hasMore?: boolean;
    onChange?: (value: number) => void;
    labels?: {
        first?: string;
        last?: string;
        previous?: string;
        next?: string;
    };
}
interface PaginationState {
    totalPages: number | null;
}
declare class Pagination extends Component<PaginationProps, PaginationState> {
    static defaultProps: {
        activePage: undefined;
        totalElements: undefined;
        pageSize: undefined;
        hasMore: undefined;
        labels: {
            first: string;
            last: string;
            previous: string;
            next: string;
        };
    };
    constructor(props: PaginationProps);
    state: PaginationState;
    componentDidUpdate({ totalElements: oldTotalElements }: PaginationProps): void;
    onChange(event: any): void;
    keyMaps: Dictionary;
    render(): React.JSX.Element;
}
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map