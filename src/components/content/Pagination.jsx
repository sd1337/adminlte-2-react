import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';
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
    this.totalPages = 1 + Math.floor(totalElements / pageSize);
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    const {
      totalElements, pageSize, labels: {
        first, last, next, previous,
      },
    } = this.props;
    const keyMaps = {};
    keyMaps[first] = 'first';
    keyMaps[last] = 'last';
    keyMaps[next] = 'next';
    keyMaps[previous] = 'previous';
    this.keyMaps = keyMaps;
    this.totalPages = 1 + Math.floor(totalElements / pageSize);
  }

  onChange(event) {
    const { target: innerText } = event;
    const { onChange, activePage } = this.props;
    let value = null;
    switch (this.keyMaps[event.target.innerText] || '') {
      case 'first':
        value = 0;
        break;
      case 'last':
        value = this.totalPages - 1;
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
    if (value >= 0 && value < this.totalPages) {
      onChange(value);
    }
  }

  render() {
    const {
      activePage, labels: {
        first, last, next, previous,
      },
    } = this.props;
    const { totalPages } = this;
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
          <BsPagination.Item disabled={activePage === 0} onClick={this.onChange}>{previous}</BsPagination.Item>
          {links}
          <BsPagination.Item disabled={lastPage === activePage} onClick={this.onChange}>{next}</BsPagination.Item>
        </BsPagination>
      </React.Fragment>
    );
  }
}

Pagination.defaultProps = {
  activePage: null,
  totalElements: null,
  pageSize: null,
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
  onChange: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    previous: PropTypes.string,
    next: PropTypes.string,
  }),
};

export default Pagination;
