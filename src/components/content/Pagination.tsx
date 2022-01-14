import React, { Component, ReactElement } from 'react';
import { Pagination as BsPagination } from 'react-bootstrap';
import PaginationItem from 'react-bootstrap/lib/PaginationItem';
import { Dictionary } from '../PropTypes';

interface PaginationProps {
  activePage?: number,
  totalElements?: number,
  pageSize?: number,
  hasMore?: boolean,
  onChange?: (value: number) => void,
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

  onChange(event: any /* MouseEvent<PaginationItem> */) {
    const { onChange, activePage, hasMore } = this.props;
    const { totalPages } = this.state;
    const totPages = totalPages || 0;
    const actPage = activePage || 0;
    let value = null;
    switch (this.keyMaps[event.target.innerText] || '') {
      case 'first':
        value = 0;
        break;
      case 'last':
        value = totPages - 1;
        break;
      case 'next':
        value = actPage + 1;
        break;
      case 'previous':
        value = actPage - 1;
        break;
      default:
        value = parseInt(event.target.innerText, 10) - 1;
        break;
    }
    if (onChange && value >= 0 && (value < totPages || hasMore !== undefined)) {
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
    const actPage = activePage || 0;
    if (totalPages) {
      const firstFourPages = activePage !== undefined && (activePage < 3);
      const lastFourPages = activePage !== undefined && (totalPages - activePage < 4);
      const links: ReactElement[] = [];

      const getIntermediate = (from: number, to: number, arr: ReactElement[]) => {
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
          getIntermediate(actPage - 1, actPage + 2, links);
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
          {(actPage > 0) && <BsPagination.Ellipsis key="page_none" />}
          <BsPagination.Item key="page_active" active>{actPage + 1}</BsPagination.Item>
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
