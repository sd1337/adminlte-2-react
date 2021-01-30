import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination as BsPagination } from 'react-bootstrap';

class Pagination extends Component {
  state = {}

  constructor(props) {
    super(props);
    const {
      totalElements, pageSize, labels: {
        first, last, next, previous,
      },
    } = props;
    const keyMaps = {};
    keyMaps[first] = 'first';
    keyMaps[last] = 'last';
    keyMaps[next] = 'next';
    keyMaps[previous] = 'previous';
    this.keyMaps = keyMaps;
    this.state.totalPages = totalElements ? Math.ceil(totalElements / pageSize) : null;
    // this.totalPages = totalElements ? Math.ceil(totalElements / pageSize) : null;
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate({ totalElements: oldTotalElements }, { totalPages: oldTotalPages }) {
    const {
      totalElements, pageSize, labels: {
        first, last, next, previous,
      },
    } = this.props;
    const { totalPages } = this.state;
    const keyMaps = {};
    keyMaps[first] = 'first';
    keyMaps[last] = 'last';
    keyMaps[next] = 'next';
    keyMaps[previous] = 'previous';
    this.keyMaps = keyMaps;
    // this.totalPages = totalElements ? Math.ceil(totalElements / pageSize) : null;
    if (oldTotalElements !== totalElements) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        totalPages: totalElements ? Math.ceil(totalElements / pageSize) : null,
      });
    }
  }

  onChange(event) {
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

  render() {
    const {
      activePage, labels: {
        first, last, next, previous,
      },
      hasMore,
    } = this.props;
    const { totalPages } = this.state;
    if (totalPages) {
      const firstFourPages = activePage < 3;
      const lastFourPages = totalPages - activePage < 4;
      const links = [];

      const getIntermediate = (from, to, arr) => {
        // eslint-disable-next-line no-plusplus
        for (let i = from; i < to; ++i) {
          arr.push(<BsPagination.Item key={`page_${i}`} active={i === activePage} onClick={this.onChange}>{i + 1}</BsPagination.Item>);
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
        <React.Fragment>
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
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <BsPagination>
          <BsPagination.Item
            disabled={activePage === 0}
            onClick={this.onChange}
          >
            {previous}
          </BsPagination.Item>
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
      </React.Fragment>
    );
  }
}

Pagination.defaultProps = {
  activePage: null,
  totalElements: null,
  pageSize: null,
  hasMore: null,
  labels: {
    first: 'First',
    last: 'Last',
    previous: 'Previous',
    next: 'Next',
  },
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  totalElements: PropTypes.number,
  pageSize: PropTypes.number,
  hasMore: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    previous: PropTypes.string,
    next: PropTypes.string,
  }),
};

export default Pagination;
