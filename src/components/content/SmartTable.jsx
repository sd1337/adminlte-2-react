/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import uuidv4 from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import * as Inputs from './Inputs';
import Button from './Button';
import Divider from './Divider';
import Pagination from './Pagination';

import './SmartTable.css';
import SmartTableHeader from './smartTable/SmartTableHeader';

const { Text } = Inputs;

const classPreFix = 'smartTable';

class SmartTable extends Component {
  static columnsFromData(data) {
    let cols = Object.keys(data[0]).filter(p => !p.startsWith('_'));
    cols = cols.map(p => ({ data: p, title: p.replace(/^./, m => m.toUpperCase()).replaceAll(/([a-z])([A-Z])/g, '$1 $2') }));
    return cols;
  }

  static headersFromColumns(columns, key, order, orderChanged, setFilterValue) {
    const sortIcons = {
      up: <FontAwesomeIcon icon={['fa', 'sort-up']} />,
      down: <FontAwesomeIcon icon={['fa', 'sort-down']} />,
      default: <FontAwesomeIcon icon={['fa', 'sort']} color="#d1d1d1" />,
    };
    const headers = columns.map((p, i) => (
      <>
        <SmartTableHeader
          column={p}
          key={key}
          classPreFix={classPreFix}
          sortIcons={sortIcons}
          order={order}
          orderChanged={orderChanged}
          setFilterValue={setFilterValue}
          open={i === 0}
        />
      </>
    ));
    return headers;
  }

  static searchButtonsFromColumns(columns, filterColumn, setFilterColumn) {
    let searchButtons = [
      <>
        <a
          className={`${filterColumn === '$all' ? `${classPreFix}-filter-active` : ''} ${classPreFix}-filter`}
          onClick={() => { setFilterColumn('$all'); }}
        >
          All
        </a>
        {filterColumn === '$all' && <FontAwesomeIcon className={`${classPreFix}-filter-active-icon`} icon={['fa', 'check']} />}
      </>,
      <Divider />];
    searchButtons = searchButtons
      .concat(columns
        .map(p => (
          <>
            <a
              className={`${filterColumn === p.data ? `${classPreFix}-filter-active` : ''} ${classPreFix}-filter`}
              key={`${classPreFix}-${p.data}`}
              onClick={() => { setFilterColumn(p.data, p.title); }}
            >
              {
                p.title
              }
            </a>
            {filterColumn === p.data && <FontAwesomeIcon className={`${classPreFix}-filter-active-icon`} icon={['fa', 'check']} />}
          </>
        )));
    return searchButtons;
  }

  constructor(props) {
    super(props);
    const {
      columns, data, defaultFilterColumn, pageSize,
    } = props;
    const key = uuidv4();
    const filterColumn = defaultFilterColumn;
    this.state = {
      key,
      columns: columns || [],
      searchButtons: [<a className={`${classPreFix}-filter-active ${classPreFix}-filter`}>All</a>],
      filterColumn,
      placeholder: 'Search',
      actions: [<a>Fil</a>, <a>second</a>],
      pagination: {
        pageSize,
        totalElements: 0,
        activePage: 0,
      },
      order: [],
    };
    let cols = columns;
    if (!columns && data && data.length > 0) {
      cols = SmartTable.columnsFromData(data);
      this.state.columns = cols;
    }
    if (cols) {
      this.state.headers = SmartTable.headersFromColumns(cols, key, this.state.order, this.onOrderChanged, this.setFilterValueAndFilter);
      this.state.searchButtons = SmartTable.searchButtonsFromColumns(cols, undefined, this.onFilterColumnChanged);
    }
    if (data) {
      this.state.pagination = {
        pageSize,
        totalElements: data.length,
        activePage: 0,
      };
    }
    this.state.mappedData = this.mappedColumnsFromData(data || [], cols || [], this.state.pagination);
    this.onFilterColumnChanged = this.onFilterColumnChanged.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      filterColumn: prevFilterColumn, filter: prevFilter,
      selectedRow: prevSelectedRow, pagination: prevPagination,
      order: prevOrder,
    } = prevState;
    const { activePage: prevActivePage } = prevPagination;
    const { data: prevData } = prevProps;
    const { data, columns, pageSize } = this.props;
    const {
      key, filterColumn, columns: stateCols, filter, pagination,
      selectedRow, filteredData, order,
    } = this.state;
    const { activePage } = pagination;
    const colsExists = (columns && columns.length > 0) || (stateCols && stateCols.length > 0);
    const isNotEmpty = data && data.length > 0;
    const dataChanged = prevData !== data || ((prevData || []).length === 0 && isNotEmpty);
    const filterColumnChanged = filterColumn !== prevFilterColumn;
    const filterChanged = prevFilter !== filter || filterColumnChanged;
    const pageChanged = activePage !== prevActivePage;
    const selectedRowChanged = prevSelectedRow !== selectedRow;
    const updatePagination = dataChanged || filterChanged || pageChanged;
    const orderChanged = prevOrder !== order;
    let updateSearchButtons = filterColumn !== prevFilterColumn;
    let updateMappedData = filterChanged || selectedRowChanged || pageChanged || orderChanged;
    let updateHeaders = orderChanged;
    let localPagination = pagination;
    const updateState = {};
    let cols = columns || stateCols;
    if (!colsExists && dataChanged) {
      cols = SmartTable.columnsFromData(data);
      updateState.columns = cols;
      updateSearchButtons = true;
      updateMappedData = true;
      updateHeaders = cols.filter(p => p.title).length > 0;
    }
    if (updateHeaders) {
      updateState.headers = SmartTable.headersFromColumns(cols, key, order, this.onOrderChanged, this.setFilterValueAndFilter);
    }
    let tempData = filteredData || data;
    let localTotalElements = tempData ? tempData.length : 0;
    let localActivePage = activePage;
    if (orderChanged && order.length > 0) {
      tempData = tempData.sort((a, b) => {
        let result = 0;
        for (let i = 0; i < order.length; ++i) {
          const { column, direction } = order[i];
          const aValue = a[column];
          const bValue = b[column];
          if (direction === 'asc') {
            if (aValue < bValue) {
              result = -1;
            } else if (aValue > bValue) {
              result = 1;
            }
          } else if (direction === 'desc') {
            if (aValue < bValue) {
              result = 1;
            } else if (aValue > bValue) {
              result = -1;
            }
          }
          if (result !== 0) {
            return result;
          }
        }
        return result;
      });
    }
    if (filterChanged && isNotEmpty) {
      const { data: filterData, value: filterValue } = filter || {};
      if (filterValue) {
        const defaultColFilter = value => (value ? value.toString().toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 : false);
        const columnFilterFunc = cols.map(p => ({ data: p.data, onFilter: p.onFilter ? value => p.onFilter(value, filterValue) : defaultColFilter })).reduce((prev, current) => {
          // eslint-disable-next-line no-param-reassign
          prev[current.data] = current.onFilter;
          return prev;
        }, {});
        let filterFunc;
        if (filterData === '$all') {
          filterFunc = (row) => {
            const entries = Object.entries(row);
            const found = entries.find(([prop, value]) => {
              const func = columnFilterFunc[prop];
              if (func) {
                return func(value);
              }
              return false;
            });
            return !!(found);
          };
        } else {
          const func = columnFilterFunc[filterData];
          filterFunc = (row) => {
            const value = row[filterData];
            return func(value);
          };
        }
        tempData = data.filter(filterFunc);
        updateState.filteredData = tempData;
      } else {
        tempData = data;
        updateState.filteredData = undefined;
      }
      localTotalElements = tempData.length;
      localActivePage = 0;
    }
    if (updatePagination) {
      localPagination = {
        activePage: localActivePage,
        totalElements: localTotalElements,
        pageSize,
      };
      updateState.pagination = localPagination;
    }
    if (updateMappedData) {
      const mappedData = this.mappedColumnsFromData(tempData, cols, localPagination);
      updateState.mappedData = mappedData;
    }
    if (updateSearchButtons) {
      const searchButtons = SmartTable.searchButtonsFromColumns(cols, filterColumn, this.onFilterColumnChanged);
      updateState.searchButtons = searchButtons;
    }
    if (Object.keys(updateState).length > 0) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(updateState);
    }
  }

  onFilterColumnChanged = (filterColumn, searchPlaceholder) => {
    const { onSearchChange } = this.props;
    let filter;
    if (this.filterValue) {
      filter = {
        value: this.filterValue,
        data: filterColumn,
      };
      if (onSearchChange) {
        onSearchChange(filter);
      }
    }
    this.setState({
      filterColumn,
      placeholder: `Search ${searchPlaceholder ? ` (${searchPlaceholder})` : ''}`,
      filter,
    });
  }

  onOrderChanged = (column, direction) => {
    const { order } = this.state;
    let newOrder = [...order];
    const found = newOrder.find(p => p.column === column);
    if (found) {
      if (direction === 'asc' || direction === 'desc') {
        found.direction = direction;
      } else {
        newOrder = newOrder.filter(p => p.column !== column);
      }
    } else {
      newOrder.push({
        column, direction,
      });
    }
    this.setState({ order: newOrder });
  }

  onFilter = () => {
    const { filterColumn } = this.state;
    const filter = {
      value: this.filterValue,
      data: filterColumn,
    };
    const { onSearchChange } = this.props;
    if (onSearchChange) {
      onSearchChange(filter);
    }
    this.setState({
      filter,
    });
  }

  onRowSelect = (data, rowIdx) => {
    const { onRowSelect } = this.props;
    if (onRowSelect) {
      onRowSelect(data);
    }
    this.setState({
      selectedRow: rowIdx,
    });
  }

  getColumns = () => {
    const {
      columns: propCols,
    } = this.props;
    const {
      columns: stateCols,
    } = this.state;
    const columns = propCols && propCols.length > 0 ? propCols : stateCols;
    return columns;
  }

  setFilterValue = (event) => {
    const { target: { value } } = event;
    this.filterValue = value;
  }

  setFilterValueAndFilter = (event) => {
    this.setFilterValue(event);
    this.onFilter();
  }

  onPageChange = (page) => {
    const { pagination } = this.state;
    this.setState({
      pagination: {
        ...pagination,
        activePage: page,
      },
    });
  }

  mappedColumnsFromData = (data, columns = this.getColumns(), pagination) => {
    const {
      pageSize,
      activePage,
    } = pagination;
    const { key, selectedRow } = this.state;
    let mappedColumns;
    if (data) {
      mappedColumns = data
        .slice(pageSize * activePage, pageSize * (activePage + 1))
        .map((row, rowIdx) => {
          const isSelected = selectedRow !== undefined && selectedRow === rowIdx;
          let callback = () => { this.onRowSelect(row, rowIdx); };
          if (isSelected) {
            callback = () => { this.onRowSelect(undefined, undefined); };
          }
          return (
            <tr
              className={isSelected ? `${classPreFix}-row-selected` : ''}
              key={`${key}-${rowIdx}`}
              onClick={callback}
            >
              {columns.map(col => this.mapCell(row[col.data], col, row, rowIdx))}
            </tr>
          );
        });
    } else {
      mappedColumns = <tr><td colSpan={columns.length} className="text-center">No matching records found</td></tr>;
    }
    return mappedColumns;
  }

  mapCell(data, column, rowData, rowIdx) {
    const { key } = this.state;
    if (column.render) {
      return <td key={`${key}-${rowIdx}-${column.data}`}>{column.render(data, rowData, rowIdx)}</td>;
    }
    return <td key={`${key}-${rowIdx}-${column.data}`}>{data}</td>;
  }

  render() {
    const {
      noMargin, condensed, striped, border, hover, responsive,
    } = this.props;
    const {
      key, mappedData, searchButtons, headers, placeholder, actions,
      pagination: { activePage, pageSize, totalElements },
    } = this.state;

    const classNames = [
      'table',
      noMargin ? 'no-margin' : null,
      condensed ? 'table-condensed' : null,
      striped ? 'table-striped' : null,
      border ? 'table-bordered' : null,
      hover ? 'table-hover' : null,
    ].filter(p => p).join(' ');
    const table = (
      <div className={`${classPreFix}-wrapper`}>
        <div className={`${classPreFix}-header`}>
          <Text
            labelPosition="none"
            placeholder={placeholder}
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                this.onFilter();
              }
            }}
            buttonLeft={(
              <Button split icon="fas-search" onClick={this.onFilter}>
                {searchButtons}
              </Button>
            )}
            onChange={this.setFilterValue}
            buttonRight={(
              <>
                {/* <Button text="Go" onClick={this.onFilter} /> */}
                {actions && actions.length > 0 && (
                  <Button text="Actions">
                    {actions}
                  </Button>
                )}
              </>
            )}
            addonRight={
              <FontAwesomeIcon icon={['fas', 'info-circle']} />
            }
          />
          <FontAwesomeIcon icon={['fas', 'info-circle']} />
        </div>
        <div className={`${classPreFix}-table`}>
          <table key={key} className={classNames}>
            {headers && (
              <thead>
                <tr>
                  {headers}
                </tr>
              </thead>
            )}
            <tbody>
              {mappedData}
            </tbody>
          </table>
        </div>
        <div className={`${classPreFix}-pagination`}>
          <Pagination
            activePage={activePage}
            totalElements={totalElements}
            pageSize={pageSize}
            onChange={this.onPageChange}
          // hasMore={hasMore}
          // labels={{
          //   first,
          //   last,
          //   next,
          //   previous,
          // }}
          />
        </div>
      </div>
    );
    if (!responsive) {
      return table;
    }
    return <div className="table-responsive">{table}</div>;
  }
}

SmartTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({

  })),
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.string,
    width: PropTypes.string,
    render: PropTypes.func,
  })),
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  noMargin: PropTypes.bool,
  border: PropTypes.bool,
  responsive: PropTypes.bool,
  hover: PropTypes.bool,
  onRowSelect: PropTypes.func,
  onSearchChange: PropTypes.func,
  defaultFilterColumn: PropTypes.string,
  pageSize: PropTypes.number,
};

SmartTable.defaultProps = {
  data: null,
  columns: undefined,
  condensed: false,
  striped: false,
  noMargin: false,
  border: false,
  responsive: false,
  hover: false,
  onRowSelect: undefined,
  onSearchChange: undefined,
  defaultFilterColumn: '$all',
  pageSize: 20,
};

export default SmartTable;
