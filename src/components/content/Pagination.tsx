import React, { Component, MouseEvent, ReactElement } from 'react';
import { Pagination as BsPagination } from 'react-bootstrap';
import PaginationItem from 'react-bootstrap/lib/PaginationItem';
import { Dictionary } from '../PropTypes';

interface PaginationProps {
  activePage?: number,
  totalElements?: number,
  pageSize?: number,
  hasMore?: boolean,
  onChange: (value: number) => void,
  labels?: {
    first?: string,
    last?: string,
    previous?: string,
    next?: string,
  },
}
interface PaginationState {
  totalPages: number | null,
}

class Pagination extends Component<PaginationProps, PaginationState> {
  static defaultProps = {
    activePage: undefined,
    totalElements: undefined,
    pageSize: undefined,
    hasMore: undefined,
    labels: {
      first: 'First',
      last: 'Last',
      previous: 'Previous',
      next: 'Next',
    },
  };

  constructor(props: PaginationProps) {
    super(props);
    const {
      totalElements, pageSize, labels: {
        first = 'First', last = 'Last', next = 'Next', previous = 'Previous',
      } = {},
    } = props;
    const keyMaps: Dictionary = {};
    keyMaps[first] = 'first';
    keyMaps[last] = 'last';
    keyMaps[next] = 'next';
    keyMaps[previous] = 'previous';
    this.keyMaps = keyMaps;
    this.state.totalPages = totalElements && pageSize ? Math.ceil(totalElements / pageSize) : null;
    // this.totalPages = totalElements ? Math.ceil(totalElements / pageSize) : null;
    this.onChange = this.onChange.bind(this);
  }

  state: PaginationState = {
    totalPages: null,
  };

  componentDidUpdate({ totalElements: oldTotalElements }: PaginationProps) {
    const {
      totalElements, pageSize, labels: {
        first = 'First', last = 'Last', next = 'Next', previous = 'Previous',
      } = {},
    } = this.props;
    const keyMaps: Dictionary = {};
    keyMaps[first] = 'first';
    keyMaps[last] = 'last';
    keyMaps[next] = 'next';
    keyMaps[previous] = 'previous';
    this.keyMaps = keyMaps;
    // this.totalPages = totalElements ? Math.ceil(totalElements / pageSize) : null;
    if (oldTotalElements !== totalElements) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        totalPages: totalElements && pageSize ? Math.ceil(totalElements / pageSize) : null,
      });
    }
  }

  onChange(event: MouseEvent<PaginationItem>) {
    const { onChange, activePage, hasMore } = this.props;
    const { totalPages } = this.state;
    let value = null;
    switch (this.keyMaps[event.target.innerText] || '') {
      case 'first':
        value = 0;
        break;
      case 'last':
        value = totalPages - 1;
        break;
      case 'next':
        value = activePage + 1;
        break;
      case 'previous':
        value = activePage - 1;
        break;
      default:
        value = parseInt(event.target.innerText, 10) - 1;
        break;
    }
    if (value >= 0 && (value < totalPages || hasMore !== undefined)) {
      onChange(value);
    }
  }

  keyMaps: Dictionary;

  render() {
    const {
      activePage, labels: {
        next, previous,
      } = {},
      hasMore,
    } = this.props;
    const { totalPages } = this.state;
    if (totalPages) {
      const firstFourPages = activePage < 3;
      const lastFourPages = totalPages - activePage < 4;
      const links: ReactElement[] = [];

      const getIntermediate = (from, to, arr) => {
        // eslint-disable-next-line no-plusplus
        for (let i = from; i < to; ++i) {
          arr.push(
            <BsPagination.Item
              key={`page_${i}`}
              active={i === activePage}
              onClick={this.onChange}
            >
              {i + 1}
            </BsPagination.Item>,
          );
        }
      };
      const lastPage = totalPages - 1;

      if (totalPages > 10) {
        if (firstFourPages) {
          getIntermediate(0, 5, links);
          links.push(
            <BsPagination.Ellipsis key="page_none" />,
          );
          links.push(
            <BsPagination.Item key={`page_${lastPage}`} active={lastPage === activePage} onClick={this.onChange}>{lastPage + 1}</BsPagination.Item>,
          );
        } else if (lastFourPages) {
          links.push(
            <BsPagination.Item key="page_0" active={activePage === 0} onClick={this.onChange}>1</BsPagination.Item>,
          );
          links.push(
            <BsPagination.Ellipsis key="page_none" />,
          );
          getIntermediate(totalPages - 5, totalPages, links);
        } else {
          links.push(
            <BsPagination.Item key="page_0" active={activePage === 0} onClick={this.onChange}>1</BsPagination.Item>,
          );
          links.push(
            <BsPagination.Ellipsis key="page_none" />,
          );
          getIntermediate(activePage - 1, activePage + 2, links);
          links.push(
            <BsPagination.Ellipsis key="page_none_1" />,
          );
          links.push(
            <BsPagination.Item key={`page_${lastPage}`} active={lastPage === activePage} onClick={this.onChange}>{lastPage + 1}</BsPagination.Item>,
          );
        }
      } else {
        getIntermediate(0, totalPages, links);
      }
      return (
        <>
          <BsPagination>
            <BsPagination.Item
              disabled={activePage === 0}
              onClick={((activePage !== 0) && this.onChange) || undefined}
            >
              {previous}
            </BsPagination.Item>
            {links}
            <BsPagination.Item
              disabled={lastPage === activePage}
              onClick={((lastPage !== activePage) && this.onChange) || undefined}
            >
              {next}
            </BsPagination.Item>
          </BsPagination>
        </>
      );
    }
    return (
      <>
        <BsPagination>
          <PaginationItem
            disabled={activePage === 0}
            onClick={this.onChange}
          >
            {previous}
          </PaginationItem>
          {(activePage > 0) && <BsPagination.Ellipsis key="page_none" />}
          <BsPagination.Item key="page_active" active>{activePage + 1}</BsPagination.Item>
          {hasMore && <BsPagination.Ellipsis key="page_none_1" />}
          <BsPagination.Item
            disabled={hasMore === false}
            onClick={(hasMore === true && this.onChange) || undefined}
          >
            {next}
          </BsPagination.Item>
        </BsPagination>
      </>
    );
  }
}

export default Pagination;
