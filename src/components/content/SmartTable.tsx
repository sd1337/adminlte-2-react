/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React, { Component, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Inputs from './Inputs';
import Button from './Button';
import Divider from './Divider';
import Pagination from './Pagination';
import { arrayEquals } from '../Utilities';

import { ColumnType, DataType } from './TableProps';
import './SmartTable.css';
import SmartTableHeader from './smartTable/SmartTableHeader';
import SmartTableModal from './smartTable/SmartTableModal';
import SmartTableSelectColumns from './smartTable/SmartTableSelectColumns';
import {
  SmartColumnType, SmartOrderType, SmartPagination, SmartTableOrderChangedCallback, SmartTableHeaderOrderDirection, SmartTableOrderDirection, SmartTableModalParams, MappedColumnType,
} from './smartTable/SmartTableTypes';

const { Text } = Inputs;

const classPreFix = 'smartTable';

interface SmartTableProps {
  data: DataType[],
  columns: SmartColumnType[],
  condensed?: boolean,
  striped?: boolean,
  noMargin?: boolean,
  border?: boolean,
  responsive?: boolean,
  hover?: boolean,
  onRowSelect?: (data?: DataType, index?: number) => void | boolean,
  onRowDeselect?: (data?: DataType, index?: number) => void | boolean,
  onSearchChange?: Function,
  onSearch?: Function,
  defaultFilterColumn?: string,
  pageSize?: number,
  page?: number,
  totalElements?: number,
  hasMore?: boolean,
  onPageChange?: Function,
  filterExternal?: boolean,
  onOrderChange?: Function,
  select?: 'single' | 'multiple'
  selectedRows?: any[],
  selectionMode: 'index' | 'property' | 'object',
  selectionProperty: string,
  simpleCompare: boolean
}

interface SmartTableState {
  key: string,
  columns: SmartColumnType[],
  filterColumn?: string,
  placeholder: string,
  actions: ReactElement[],
  searchButtons: ReactElement[],
  pagination: SmartPagination,
  order: SmartOrderType[],
  selectedRow?: number | string,
  selectedRows: (number | string)[],
  selectedRowsData: DataType[]
  modal: SmartTableModalParams,
  hiddenColumns: string[],
  headers?: ReactElement[],
  mappedData: ReactElement[] | ReactElement,
  filteredData?: DataType[],
  filter?: { data: string, value: string },
}

class SmartTable extends Component<SmartTableProps, SmartTableState> {
  static columnsFromData(data: DataType[]): SmartColumnType[] {
    const colNames = Object.keys(data[0]).filter((p) => !p.startsWith('_'));
    return colNames.map((p) => ({ data: p, title: p.replace(/^./, (m) => m.toUpperCase()).replace(/([a-z])([A-Z])/g, '$1 $2') } as SmartColumnType));
  }

  static headersFromColumns(columns: SmartColumnType[],
    key: string,
    order: SmartOrderType[],
    orderChanged: SmartTableOrderChangedCallback,
    setFilterValue: (temp: any) => void,
    hiddenColumns: string[]): ReactElement[] {
    const sortIcons = {
      up: <FontAwesomeIcon icon={['fas', 'sort-up']} />,
      down: <FontAwesomeIcon icon={['fas', 'sort-down']} />,
      default: <FontAwesomeIcon icon={['fas', 'sort']} color="#d1d1d1" />,
    };
    return columns
      .filter((p) => hiddenColumns.find((p2) => p2 === p.data) === undefined)
      .map((p) => (
        <>
          <SmartTableHeader
            column={p}
            smartTableKey={key}
            classPreFix={classPreFix}
            sortIcons={sortIcons}
            order={order}
            orderChanged={orderChanged}
          />
        </>
      ));
  }

  static searchButtonsFromColumns(columns: SmartColumnType[], filterColumn: string | undefined, setFilterColumn: (column: string, title?: string) => void) {
    let searchButtons = [
      <>
        <a
          className={`${filterColumn === '$all' ? `${classPreFix}-filter-active` : ''} ${classPreFix}-filter`}
          onClick={() => { setFilterColumn('$all', undefined); }}
        >
          All
        </a>
        {filterColumn === '$all' && <FontAwesomeIcon className={`${classPreFix}-filter-active-icon`} icon={['fas', 'check']} />}
      </>,
      <Divider />];
    searchButtons = searchButtons
      .concat(columns
        .map((p) => (
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
            {filterColumn === p.data && <FontAwesomeIcon className={`${classPreFix}-filter-active-icon`} icon={['fas', 'check']} />}
          </>
        )));
    return searchButtons;
  }

  static mapCell(data: any, column: ColumnType, rowData: DataType, rowIdx: number, key: string) {
    try {
      if (column.render) {
        return <td key={`${key}-${rowIdx}-${column.data}`}>{column.render(data, rowData, rowIdx)}</td>;
      }
      return <td key={`${key}-${rowIdx}-${column.data}`}>{data}</td>;
    } catch (error) {
      return <td key={`${key}-${rowIdx}-${column.data}`}>Failed to render</td>;
    }
  }

  static defaultProps = {
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
    onSearch: undefined,
    defaultFilterColumn: '$all',
    pageSize: 20,
    page: undefined,
    totalElements: undefined,
    hasMore: undefined,
    onPageChange: undefined,
    filterExternal: false,
    onOrderChange: undefined,
    select: 'single',
    selectionMode: 'index',
    selectionProperty: 'id',
    simpleCompare: true,
  };

  constructor(props: SmartTableProps) {
    super(props);
    const {
      columns, data, defaultFilterColumn, pageSize, selectionMode,
      selectedRows, selectionProperty,
    } = props;
    const key = uuidv4();
    const filterColumn = defaultFilterColumn;
    let hiddenColumns: string[] = [];
    let order: SmartOrderType[] = [];
    if (columns) {
      {
        const temp = columns.filter((p) => p.hidden).map((p) => p.data);
        if (temp.length > 0) {
          hiddenColumns = hiddenColumns.concat(temp);
        }
      }
      {
        const temp = columns.filter((p) => p.order).map((p) => ({ column: p.data, direction: p.order } as SmartOrderType));
        if (temp.length > 0) {
          order = temp;
        }
      }
    }
    let pagination = {
      pageSize,
      totalElements: 0,
      activePage: 0,
    };
    let cols = columns;
    if (!columns && data && data.length > 0) {
      cols = SmartTable.columnsFromData(data);
    }

    let newHeaders;
    let newSearchButtons = [<a className={`${classPreFix}-filter-active ${classPreFix}-filter`}>All</a>];
    if (cols) {
      newHeaders = SmartTable
        .headersFromColumns(cols,
          key,
          order,
          this.onOrderChanged,
          this.setFilterValueAndFilter,
          hiddenColumns);
      newSearchButtons = SmartTable
        .searchButtonsFromColumns(cols,
          '$all',
          this.onFilterColumnChanged);
    }
    if (data) {
      pagination = {
        pageSize,
        totalElements: data.length,
        activePage: 0,
      };
    }
    let stateSelectedRows: (string | number)[] = [];
    let stateSelectedRowsData: DataType[] = [];
    if (selectedRows && data) {
      if (selectionMode === 'index') {
        stateSelectedRows = stateSelectedRows.concat(selectedRows);
        stateSelectedRowsData = stateSelectedRowsData.concat(data.filter((p, i) => selectedRows.indexOf(i) > -1));
      } else if (selectionMode === 'property') {
        stateSelectedRows = stateSelectedRows.concat(selectedRows);
        stateSelectedRowsData = stateSelectedRowsData.concat(data.filter((p) => selectedRows.indexOf(p[selectionProperty]) > -1));
      } else if (selectionMode === 'object') {
        stateSelectedRows = selectedRows;
        stateSelectedRowsData = selectedRows;
      }
    }
    // this.state.
    this.onFilterColumnChanged = this.onFilterColumnChanged.bind(this);
    const newState = {
      key,
      headers: newHeaders,
      searchButtons: newSearchButtons,
      columns: cols,
      filterColumn,
      placeholder: 'Search',
      actions: [<a onClick={this.openColumnModal}>Columns</a>],
      pagination,
      order,
      modal: {
        component: undefined,
        props: {},
        title: undefined,
      },
      hiddenColumns,
      mappedData: [],
      selectedRows: stateSelectedRows,
      selectedRowsData: stateSelectedRowsData,
    };
    const mapped = this.mappedColumnsFromData(data || [], cols || [], pagination, hiddenColumns, newState);
    this.state = {
      ...newState,
      mappedData: mapped,
    };
    this.rowIsSelected = this.rowIsSelected.bind(this);
  }

  componentDidUpdate(prevProps: SmartTableProps, prevState: SmartTableState) {
    const {
      filterColumn: prevFilterColumn, filter: prevFilter,
      selectedRow: prevSelectedRow, pagination: prevPagination,
      order: prevOrder, hiddenColumns: prevHiddenColumns,
      columns: prevColumns, selectedRows: prevSelectedRows,
    } = prevState;
    const { activePage: prevActivePage } = prevPagination;
    const {
      data: prevData, totalElements: prevTotalElements,
      selectedRows: prevPropsSelectedRows,
    } = prevProps;
    const {
      data, columns, pageSize, filterExternal, totalElements, selectionMode,
      selectionProperty, selectedRows: propsSelectedRows, simpleCompare,
    } = this.props;
    const {
      key, filterColumn, columns: stateCols, filter, pagination,
      selectedRow, filteredData, order, hiddenColumns, selectedRows,
    } = this.state;
    const { activePage } = pagination;
    const colsExists = (columns && columns.length > 0) || (stateCols && stateCols.length > 0);
    const colsChanged = stateCols !== prevColumns;
    const dataIsNotEmpty = data && data.length > 0;
    let dataChanged;
    if (simpleCompare) {
      dataChanged = (prevData !== data || ((prevData || []).length === 0 && dataIsNotEmpty)) || totalElements !== prevTotalElements;
    } else {
      dataChanged = !arrayEquals(prevData, data) || totalElements !== prevTotalElements;
    }
    const filterColumnChanged = filterColumn !== prevFilterColumn;
    const filterChanged = prevFilter !== filter || filterColumnChanged;
    const pageChanged = activePage !== prevActivePage;
    const selectedRowChanged = prevSelectedRow !== selectedRow;
    const updatePagination = dataChanged || filterChanged || pageChanged || pagination.pageSize !== pageSize;
    const orderChanged = prevOrder !== order || dataChanged;
    const hiddenColsChanged = hiddenColumns !== prevHiddenColumns;
    const selectedRowsChanged = prevSelectedRows.length !== selectedRows.length || selectedRows.filter((p: number | string) => prevSelectedRows.indexOf(p) === -1).length > 0;
    const propSelectionIsNotUndefined = Array.isArray(propsSelectedRows) && Array.isArray(prevPropsSelectedRows);
    const propSelectedRowsChanged = propSelectionIsNotUndefined && (prevPropsSelectedRows.length !== propsSelectedRows.length || selectedRows.filter((p: number | string) => propsSelectedRows.indexOf(p) === -1).length > 0);
    let updateSearchButtons = filterColumn !== prevFilterColumn;
    let updateMappedData = dataChanged || filterChanged || selectedRowChanged || pageChanged || orderChanged || hiddenColsChanged || colsChanged || selectedRowsChanged;
    let updateHeaders = orderChanged || hiddenColsChanged || colsChanged;
    let localPagination = pagination;
    const updateState: any = {};
    let cols = stateCols;
    if (!colsExists && dataChanged) {
      cols = SmartTable.columnsFromData(data);
      updateState.columns = cols;
      updateSearchButtons = true;
      updateMappedData = true;
      updateHeaders = cols.filter((p) => p.title).length > 0;
    }
    if (updateHeaders) {
      updateState.headers = SmartTable.headersFromColumns(cols, key, order, this.onOrderChanged, this.setFilterValueAndFilter, hiddenColumns);
    }
    let tempData = filteredData || data;
    let localTotalElements = tempData ? tempData.length : 0;
    let localActivePage = activePage;
    if (orderChanged && order.length > 0) {
      let colsMapped: MappedColumnType;
      if (cols) {
        colsMapped = cols.reduce((p, c) => {
          // eslint-disable-next-line no-param-reassign
          p[c.data] = c;
          return p;
        }, ({} as MappedColumnType));
      }
      tempData = tempData.sort((a, b) => {
        let result = 0;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < order.length; ++i) {
          const { column, direction } = order[i];
          const filterValueMethod = colsMapped[column].rawValue;
          let aValue;
          let bValue;
          if (filterValueMethod) {
            aValue = filterValueMethod(a[column], a);
            bValue = filterValueMethod(b[column], b);
          } else {
            aValue = a[column];
            bValue = b[column];
          }
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
    if (!filterExternal && filterChanged && dataIsNotEmpty) {
      const { data: filterData, value: filterValue } = filter || {};
      if (filterValue) {
        const defaultColFilter = (value: string | number | boolean) => (value ? value.toString().toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 : false);
        const init: { [key: string]: any } = {};
        const columnFilterFunc = cols
          .map((p) => ({ data: p.data, onFilter: p.onFilter ? (value: string) => p.onFilter(value, filterValue) : defaultColFilter }))
          .reduce((prev, current) => {
            // eslint-disable-next-line no-param-reassign
            prev[current.data] = current.onFilter;
            return prev;
          }, init);
        let filterFunc;
        if (filterData === '$all') {
          filterFunc = (row: DataType) => {
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
        } else if (filterData) {
          const func = columnFilterFunc[filterData];
          filterFunc = (row: DataType) => {
            const value = row[filterData];
            return func(value);
          };
        } else {
          filterFunc = () => true;
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
      const mappedData = this.mappedColumnsFromData(tempData, cols, localPagination, hiddenColumns, this.state);
      updateState.mappedData = mappedData;
    }
    if (updateMappedData || propSelectedRowsChanged) {
      if (dataIsNotEmpty && propsSelectedRows) {
        if (selectionMode === 'index') {
          updateState.selectedRows = propsSelectedRows;
          updateState.selectedRowsData = data.filter((p, i) => propsSelectedRows.indexOf(i) > -1);
        } else if (selectionMode === 'property') {
          updateState.selectedRows = propsSelectedRows;
          updateState.selectedRowsData = data.filter((p) => propsSelectedRows.indexOf(p[selectionProperty]) > -1);
        } else if (selectionMode === 'object') {
          updateState.selectedRows = propsSelectedRows;
          updateState.selectedRowsData = propsSelectedRows;
        }
      }
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

  handleCloseModal = () => {
    const modal: SmartTableModalParams = {
      component: undefined,
      props: [undefined],
      title: undefined,
    };
    this.setState({
      modal,
    });
  };

  handleAccept = (newState: any) => {
    const modal = {
      component: undefined,
      props: undefined,
      title: undefined,
    };
    this.setState({
      ...newState,
      modal,
    });
  };

  onFilterColumnChanged = (filterColumn: any, searchPlaceholder: any) => {
    const { onSearchChange, onSearch } = this.props;
    let filter;
    if (this.filterValue) {
      filter = {
        value: this.filterValue,
        data: filterColumn,
      };
      if (onSearchChange) {
        onSearchChange(filter);
      }
      if (onSearch) {
        onSearch(filter);
      }
    }
    this.setState({
      filterColumn,
      placeholder: `Search ${searchPlaceholder ? ` (${searchPlaceholder})` : ''}`,
      filter,
    });
  };

  onOrderChanged = (column: string, direction: SmartTableHeaderOrderDirection) => {
    const { order } = this.state;
    const { onOrderChange } = this.props;
    let newOrder = [...order];
    const found = newOrder.find((p) => p.column === column);
    if (found) {
      if (direction === 'asc' || direction === 'desc') {
        found.direction = direction;
      } else {
        newOrder = newOrder.filter((p) => p.column !== column);
      }
    } else {
      newOrder.push({
        column, direction: (direction as SmartTableOrderDirection),
      });
    }
    if (onOrderChange) {
      onOrderChange(newOrder);
    }
    this.setState({ order: newOrder });
  };

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
    if (this.filterValue && filterColumn) {
      this.setState({
        filter: {
          value: this.filterValue,
          data: filterColumn,
        },
      });
    } else {
      this.setState({
        filter: undefined,
      });
    }
  };

  onRowSelect = (data?: DataType, rowIdx?: number) => {
    const {
      onRowSelect, select, selectionMode, selectionProperty,
      selectedRows: propSelectedRows,
    } = this.props;
    let propRowSelectCallbackWasSuccess = true;
    if (onRowSelect) {
      const result = onRowSelect(data, rowIdx);
      if (result !== undefined) {
        propRowSelectCallbackWasSuccess = result;
      }
    }
    const isDeselectSingleRow = !rowIdx;
    const selectionManagedExternal = !!propSelectedRows;
    const preventDeselect = isDeselectSingleRow && !propRowSelectCallbackWasSuccess;
    const allowChange = !selectionManagedExternal && !preventDeselect;
    if (allowChange) {
      if (selectionMode === 'index') {
        if (select === 'single') {
          this.setState({
            selectedRow: rowIdx,
          });
        } else if (rowIdx !== undefined) {
          const { selectedRows } = this.state;
          const newRows = [...selectedRows];
          newRows.push(rowIdx);
          this.setState({
            selectedRows: newRows,
          });
        }
      } else if (selectionMode === 'property') {
        const selectedProp = data ? data[selectionProperty] : undefined;
        if (select === 'single') {
          this.setState({
            selectedRow: selectedProp,
          });
        } else if (selectedProp !== undefined) {
          const { selectedRows } = this.state;
          const newRows = [...selectedRows];
          newRows.push(selectedProp);
          this.setState({
            selectedRows: newRows,
          });
        }
      } else if (selectionMode === 'object') {
        if (select === 'single') {
          this.setState({
            selectedRowsData: data ? [data] : [],
          });
        } else if (data !== undefined) {
          const { selectedRowsData } = this.state;
          const newRows = [...selectedRowsData];
          newRows.push(data);
          this.setState({
            selectedRowsData: newRows,
          });
        }
      }
    }
  };

  onRowDeselect = (data: DataType, rowIdx: number) => {
    const { selectedRows, selectedRowsData } = this.state;
    const {
      onRowDeselect, selectionMode, selectionProperty,
      selectedRows: propSelectedRows,
    } = this.props;
    let deselect = true;
    if (onRowDeselect) {
      const result = onRowDeselect(data, rowIdx);
      if (result !== undefined) {
        deselect = result;
      }
    }
    const selectionManagedExternal = !!propSelectedRows;
    if (deselect && !selectionManagedExternal) {
      if (selectionMode === 'index') {
        const newRows = [...selectedRows];
        newRows.splice(newRows.indexOf(rowIdx), 1);
        this.setState({
          selectedRows: [...newRows],
        });
      } else if (selectionMode === 'property') {
        const selectedProp = data ? data[selectionProperty] : undefined;
        const newRows = [...selectedRows];
        newRows.splice(newRows.indexOf(selectedProp), 1);
        this.setState({
          selectedRows: [...newRows],
        });
      } else if (selectionMode === 'object') {
        const newRows = [...selectedRowsData];
        newRows.splice(newRows.indexOf(data), 1);
        this.setState({
          selectedRowsData: [...newRows],
        });
      }
    }
    // if (onRowSelect) {
    //   onRowSelect(data);
    // }
    // if (select === 'single') {
    //   this.setState({
    //     selectedRow: rowIdx,
    //   });
    // } else if (rowIdx) {
    //   const { selectedRows } = this.state;
    //   selectedRows.push(rowIdx);
    //   this.setState({
    //     selectedRows,
    //   });
    // }
  };

  onPageChange = (page: number) => {
    const { onPageChange } = this.props;
    const { pagination } = this.state;
    this.setState({
      pagination: {
        ...pagination,
        activePage: page,
      },
    });
    if (onPageChange) {
      onPageChange(page);
    }
  };

  setFilterValueAndFilter = (event: any) => {
    this.setFilterValue(event);
    this.onFilter();
  };

  setFilterValue = (event: any) => {
    const { target: { value } } = event;
    this.filterValue = value;
  };

  getColumns = () => {
    const {
      columns: propCols,
    } = this.props;
    const {
      columns: stateCols,
    } = this.state;
    return propCols && propCols.length > 0 ? propCols : stateCols;
  };

  filterValue?: string;

  openColumnModal = () => {
    const { columns, order, hiddenColumns } = this.state;
    const modal = {
      component: SmartTableSelectColumns,
      props: {
        columns,
        order,
        hiddenColumns,
        classPreFix,
      },
      title: 'Select columns',
    };
    this.setState({
      modal,
    });
  };

  rowIsSelected(row: DataType, rowIdx: number, state: SmartTableState) {
    const { selectionMode } = this.props;
    const { selectedRow, selectedRows, selectedRowsData } = state;
    if (selectionMode === 'index') {
      return (selectedRow !== undefined && selectedRow === rowIdx) || selectedRows.indexOf(rowIdx) > -1;
    }
    if (selectionMode === 'property') {
      const { selectionProperty } = this.props;
      const prop = row[selectionProperty];
      return (selectedRow !== undefined && selectedRow === prop) || selectedRows.indexOf(prop) > -1;
    }
    return selectedRowsData.indexOf(row) > -1;
  }

  mappedColumnsFromData = (data: DataType[], columns = this.getColumns(), pagination: any, hiddenColumns: string[], state: SmartTableState): ReactElement[] | ReactElement => {
    const {
      pageSize,
      activePage,
    } = pagination;
    const { key } = state;
    let mappedColumns: ReactElement[] | ReactElement;
    const colsFiltered = columns.filter((p) => hiddenColumns.find((p2) => p2 === p.data) === undefined);
    if (data) {
      let temp = data;
      // mappedColumns = data;
      const { page: propsActivePage, select } = this.props;
      if (propsActivePage === undefined) {
        temp = temp
          .slice(pageSize * activePage, pageSize * (activePage + 1));
      }
      const indexOffset = pageSize * activePage;
      mappedColumns = temp
        .map((row, rowIdx) => {
          const calculatedRowIndex = rowIdx + indexOffset;
          const isSelected = this.rowIsSelected(row, calculatedRowIndex, state);
          let callback = () => { this.onRowSelect(row, calculatedRowIndex); };
          if (isSelected) {
            if (select === 'single') {
              callback = () => { this.onRowSelect(); };
            } else {
              callback = () => { this.onRowDeselect(row, calculatedRowIndex); };
            }
          }
          return (
            <tr
              className={isSelected ? `${classPreFix}-row-selected` : ''}
              key={`${key}-${calculatedRowIndex}`}
              onClick={callback}
            >
              {colsFiltered.map((col) => SmartTable.mapCell(row[col.data], col, row, calculatedRowIndex, key))}
            </tr>
          );
        });
    } else {
      mappedColumns = <tr><td colSpan={colsFiltered.length} className="text-center">No matching records found</td></tr>;
    }
    return mappedColumns;
  };

  render() {
    const {
      noMargin, condensed, striped, border, hover, responsive,
      page: propsActivePage, totalElements: propsTotalElements,
      hasMore,
    } = this.props;
    const {
      key, mappedData, searchButtons, headers, placeholder, actions,
      pagination: { activePage, pageSize, totalElements }, modal,
    } = this.state;
    const { title, component, props } = modal;
    const classNames = [
      'table',
      noMargin ? 'no-margin' : null,
      condensed ? 'table-condensed' : null,
      striped ? 'table-striped' : null,
      border ? 'table-bordered' : null,
      hover ? 'table-hover' : null,
    ].filter((p) => p).join(' ');
    const table = (
      <div className={`${classPreFix}-wrapper`}>
        <SmartTableModal
          classPreFix={classPreFix}
          title={title}
          component={component}
          props={props}
          handleAccept={this.handleAccept}
          handleClose={this.handleCloseModal}
        />
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
            activePage={propsActivePage || activePage}
            totalElements={propsTotalElements || totalElements}
            pageSize={pageSize}
            onChange={this.onPageChange}
            hasMore={hasMore}
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

export default SmartTable;
