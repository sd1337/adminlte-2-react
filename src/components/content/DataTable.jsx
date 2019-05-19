import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-select-bs/css/select.bootstrap.css';

import Pagination from './Pagination';
import './DataTable.css';
import { arrayEquals } from '../Utilities';

const uuidv4 = require('uuid/v4');
const $ = require('jquery');
// $.DataTable = require('datatables.net');
$.DataTable = require('datatables.net-bs');
require('datatables.net-select-bs');

const camelToKebap = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const defaultLanguageOptions = {
  decimal: '',
  emptyTable: 'No data available in table',
  info: 'Showing _START_ to _END_ of _TOTAL_ entries',
  infoEmpty: 'Showing 0 to 0 of 0 entries',
  infoFiltered: '(filtered from _MAX_ total entries)',
  infoPostFix: '',
  thousands: ',',
  lengthMenu: 'Show _MENU_ entries',
  loadingRecords: 'Loading...',
  processing: 'Processing...',
  search: 'Search:',
  zeroRecords: 'No matching records found',
  paginate: {
    first: 'First',
    last: 'Last',
    next: 'Next',
    previous: 'Previous',
  },
  aria: {
    sortAscending: ': activate to sort column ascending',
    sortDescending: ': activate to sort column descending',
  },
  select: {
    cells: {
      _: 'Selected %d cells',
      0: 'Click a cell to select it',
      1: '1 row selected',
    },
    rows: {
      _: '%d rows selected',
      0: 'Click a row to select it',
      1: '1 row selected',
    },
  },
};

class DataTable extends Component {
  state = {
    options: null,
    page: 0,
  }

  constructor(props) {
    super(props);
    const {
      options, totalElements, hasMore, order,
    } = props;
    this.controlled = typeof totalElements === 'number' || hasMore;
    if (!this.controlled) {
      this.state.options = { order: this.orderToInternal(order), ...options };
    } else {
      const {
        paging, info, pageLength, ...clearedOptions
      } = options;
      this.state.options = {
        paging: false, info: false, order: this.orderToInternal(order), ...clearedOptions,
      };
    }
    this.state.domNode = this.createDomObject();
    this.setActivePage = this.setActivePage.bind(this);
  }

  componentDidMount() {
    const {
      ajaxMap, ajaxResponseMap,
    } = this.props;
    if (ajaxMap) {
      $(this.main).on('preXhr.dt', ajaxMap);
    }
    if (ajaxResponseMap) {
      $(this.main).on('xhr.dt', ajaxResponseMap);
    }
    this.initializeDatatables();
  }

  shouldComponentUpdate({
    data, selectedRows, footer, options, page: oldPage,
    order, totalElements, hasMore, searchValue,
  }, { order: oldStateOrder }) {
    const {
      data: propData, selectedRows: propSelectedRows, footer: propFooter, options: propOptions,
      order: propOrder, totalElements: propTe, hasMore: propHasmore, searchValue: propSearchValue,
    } = this.props;
    const { page, order: stateOrder } = this.state;
    if (data !== propData
      || !arrayEquals(selectedRows, propSelectedRows)
      || footer !== propFooter
      || JSON.stringify(options) !== JSON.stringify(propOptions)
      || JSON.stringify(order) !== JSON.stringify(propOrder)
      || JSON.stringify(oldStateOrder) !== JSON.stringify(stateOrder)
      || oldPage !== page
      || totalElements !== propTe
      || hasMore !== propHasmore
      || searchValue !== propSearchValue
    ) {
      return true;
    }
    return false;
  }

  componentDidUpdate({
    data: oldData, footer: oldFooter, selectedRows: oldSelectedRows, order: oldOrder,
    hasMore: oldHasMore, totalElements: oldTe, searchValue: oldSearchValue,
  }) {
    const {
      onClickEvents, footer, order, hasMore, totalElements, options, searchValue,
    } = this.props;
    const { api, main } = this;

    if (footer !== oldFooter) {
      const $ref = $(this.main);
      if (footer) {
        const headerCols = $ref.find('thead > tr');
        $ref.append($('<tfoot />').append(headerCols.clone()));
      } else {
        $ref.find('tfoot').remove();
      }
    }

    /* if (JSON.stringify(oldStateOptions) !== JSON.stringify(stateOptions)) {
      this.destroyDatatables();
      this.initializeDatatables();
    } */

    let redraw = false;

    const ids = [];
    $('.selected', main).each(function each() {
      ids.push(this.id);
    });
    const { data } = this.props;
    const dataChanged = !arrayEquals(oldData, data);
    if (dataChanged) {
      const currentPage = api.page();
      api.clear();
      if (data) { api.rows.add(data); }
      this.setActivePage(currentPage, true);
      redraw = true;
    }
    this.selectRows(dataChanged, oldSelectedRows);

    if (JSON.stringify(order) !== JSON.stringify(oldOrder)) {
      api.order(this.orderToInternal(order));
    }

    if (((oldHasMore === undefined
      || hasMore === undefined
      || oldHasMore === null
      || hasMore === undefined) && oldHasMore !== hasMore)
      || oldTe !== totalElements) {
      this.controlled = totalElements || hasMore;
      if (!this.controlled) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ options: { order: this.orderToInternal(order), ...options } });
      } else {
        const {
          paging, info, pageLength, ...clearedOptions
        } = options;
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          options: {
            paging: false, info: false, order: this.orderToInternal(order), ...clearedOptions,
          },
        });
      }
    }

    if (oldSearchValue !== searchValue) {
      api.search(searchValue);
      redraw = true;
    }

    if (redraw) {
      api.draw();
    }

    if (redraw && dataChanged) {
      if (onClickEvents) {
        this.bindOnClickEvents(onClickEvents, api);
      }
    }
  }

  componentWillUnmount() {
    this.destroyDatatables();
  }

  setActivePage(page, skipDraw) {
    const { api } = this;
    api.page(page);
    if (!skipDraw) {
      api.draw(false);
    }
  }

  selectRows(dataChanged, oldSelectedRows) {
    const { api } = this;
    let { selectedRows, options: { rowId = 'id' } } = this.props;
    if (selectedRows) {
      selectedRows = typeof selectedRows !== 'string' && selectedRows.length ? selectedRows : [selectedRows];
      if (dataChanged || !arrayEquals(selectedRows, oldSelectedRows)) {
        const currentPage = api.page();
        api.rows({ selected: true }).deselect();
        const rowsToSelect = [];
        // eslint-disable-next-line array-callback-return
        api.rows().every(function every() {
          if (selectedRows.indexOf(this.data()[rowId]) >= 0) {
            rowsToSelect.push(this.node());
          }
        });
        this.disableRowSelectEvent = true;
        api.rows(rowsToSelect).select();
        this.disableRowSelectEvent = false;
        // api.draw();
      }
    }
  }

  initializeDatatables() {
    const {
      data, columns, setDataTableRef, onSelect, onDeselect, onClickEvents, onOrderChange,
      onPageChange, searchValue, onSearchChange,
    } = this.props;
    const { options } = this.state;
    const localColumns = ((options && options.columns) || columns)
      .map((p) => {
        if (p.render) {
          const { render: externalRender, ...otherOptions } = p;
          const render = (...args) => {
            const localValue = externalRender(...args);
            if (React.isValidElement(localValue)) {
              return ReactDOMServer.renderToString(localValue);
            }
            return localValue;
          };
          return { render, ...otherOptions };
        }
        return p;
      });
    let search;
    if (searchValue) {
      search = { search: searchValue };
    }
    const api = $(this.main).dataTable({
      data,
      columns: localColumns,
      search,
      ...options,
    }).api();
    let initialized = false;
    this.api = api;
    this.selectRows();
    if (setDataTableRef) {
      setDataTableRef(api);
    }
    if (onSelect) {
      api.on('select', (e, dt) => {
        if (!this.disableRowSelectEvent) {
          const data2 = dt.data();
          onSelect(data2);
        }
      });
    }
    if (onDeselect) {
      api.on('deselect', (e, dt) => {
        const data2 = dt.data();
        onDeselect(data2);
      });
    }
    api.on('page.dt', () => {
      this.setActivePage(api.page());
    });
    if (onPageChange) {
      api.on('page.dt', () => {
        onPageChange(api.page());
      });
    }

    if (onOrderChange) {
      api.on('order.dt', (e, { aaSorting: order }) => {
        if (initialized) {
          const { order: oldOrder } = this;
          if (!arrayEquals(order, oldOrder)) {
            this.order = JSON.parse(JSON.stringify(order.slice(0)));
            onOrderChange(this.orderToExternal(order));
          }
        }
      });
    }

    if (onSearchChange) {
      api.on('search.dt', () => {
        if (initialized) {
          onSearchChange(api.search());
        }
      });
    }

    if (onClickEvents) {
      this.bindOnClickEvents(onClickEvents, api);
      api.on('page.dt', () => {
        this.bindOnClickEvents(onClickEvents, api);
      });
    }
    initialized = true;
  }

  orderToExternal(order) {
    const {
      columns,
    } = this.props;
    const { options } = this.state;
    const localColumns = (options && options.columns) || columns;
    return order.map(p => ({ index: p[0], column: localColumns[p[0]].data, direction: p[1] }));
  }

  orderToInternal(order) {
    const {
      columns,
    } = this.props;
    const { options } = this.state;
    const localColumns = ((options && options.columns) || columns).map(p => p.data);
    return order
      ? order.map(p => ([p.index || localColumns.indexOf(p.column), p.direction || 'asc']))
      : undefined;
  }

  destroyDatatables() {
    $(this.main)
      .dataTable()
      .api()
      .destroy(true);
  }

  createDomObject() {
    const {
      border, hover, condensed, columns, footer, options, id,
    } = this.props;
    const columns2 = (options && options.columns) || columns;
    const headerColumns = columns2.map(p => (
      <th
        key={uuidv4()}
        style={{ width: p.width ? p.width : null }}
      >
        {p.title}
      </th>
    ));
    const classes = [
      'table',
      hover ? 'table-hover' : null,
      border ? 'table-bordered' : null,
      condensed ? 'table-condensed' : null,
      'responsive',
      'nowrap',
    ].join(' ');

    const domTable = (
      <table id={id} ref={(c) => { this.main = c; }} className={classes} width="100%">
        <thead><tr>{headerColumns}</tr></thead>
        {footer && <tfoot><tr>{headerColumns}</tr></tfoot>}
      </table>
    );
    return domTable;
  }

  bindOnClickEvents(onClickEvents, api) {
    Object.entries(onClickEvents).forEach(([key, value]) => {
      $(`tbody .${camelToKebap(key)}`, this.main).each(function each() {
        const cell = api.cell($(this).parents('td'));
        const cellData = cell.data();
        const row = cell.row($(this).parents('tr'));
        const rowIndex = row.index();
        const rowData = row.data();
        $(this).on('click', () => value(cellData, rowIndex, rowData));
      });
    });
  }

  renderPagination() {
    const {
      options, page: propPage, totalElements, onPageChange, hasMore, pageSize, selectedRows,
    } = this.props;
    const localPage = propPage;
    const { paging, info: infoOption, select } = options;
    const language = options.language || defaultLanguageOptions;
    const selected = (selectedRows && (selectedRows.length || 1)) || 0;
    const pageLength = pageSize;
    const hasSelected = selected > 0;
    const {
      paginate: {
        first, last, next, previous,
      },
      info,
      infoEmpty,
      select: {
        rows,
      },
    } = language;
    let dtInfo;
    if (totalElements) {
      if (totalElements > 0) {
        dtInfo = info.replace('_START_', 1 + pageLength * localPage).replace('_END_', Math.min(pageLength * localPage + pageLength, totalElements)).replace('_TOTAL_', totalElements);
      } else {
        dtInfo = infoEmpty;
      }
    }
    let selectInfo;
    if (hasSelected) {
      if (typeof rows !== 'string') {
        if (selected === 1) {
          // eslint-disable-next-line prefer-destructuring
          selectInfo = rows[1];
        } else {
          selectInfo = rows._.replace('%d', selected);
        }
      } else {
        rows.replace('%d', selected);
      }
    } else {
      selectInfo = (rows && rows.length && rows.length > 0 && rows[0]) || '';
    }
    return (
      <Row>
        <Col sm={5}>
          {(select && !(infoOption === false)) && (
            <div className="dataTables_info" role="status" aria-live="polite">
              {dtInfo}
              <span className="select-info">
                <span className="select-item">{selectInfo}</span>
              </span>
            </div>
          )}
        </Col>
        {(!(paging === false)) && (
          <Col sm={7}>
            <Pagination
              activePage={localPage}
              totalElements={totalElements}
              pageSize={pageLength}
              onChange={onPageChange}
              hasMore={hasMore}
              labels={{
                first,
                last,
                next,
                previous,
              }}
            />
          </Col>
        )}
      </Row>
    );
  }

  render() {
    const { domNode } = this.state;
    return (
      <div className="datatable-controlled-elems">
        {domNode}
        {this.controlled && this.renderPagination()}
      </div>
    );
  }
}

DataTable.propTypes = {
  id: PropTypes.string,
  options: PropTypes.shape({

  }).isRequired,
  ajaxMap: PropTypes.func,
  ajaxResponseMap: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  setDataTableRef: PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  footer: PropTypes.bool,
  hover: PropTypes.bool,
  border: PropTypes.bool,
  condensed: PropTypes.bool,
  selectedRows: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  onClickEvents: PropTypes.shape({}),
  page: PropTypes.number,
  totalElements: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func,
  onOrderChange: PropTypes.func,
  hasMore: PropTypes.bool,
  order: PropTypes.arrayOf(PropTypes.shape({
    direction: PropTypes.oneOf(['asc', 'desc']).isRequired,
    column: PropTypes.string,
    index: PropTypes.number,
  })),
  onSearchChange: PropTypes.func,
  searchValue: PropTypes.string,
};

DataTable.defaultProps = {
  id: undefined,
  ajaxMap: null,
  ajaxResponseMap: null,
  data: null,
  columns: null,
  setDataTableRef: null,
  onSelect: null,
  onDeselect: null,
  footer: false,
  hover: true,
  border: false,
  condensed: false,
  selectedRows: null,
  onClickEvents: null,
  page: null,
  totalElements: null,
  pageSize: null,
  onPageChange: null,
  onOrderChange: null,
  hasMore: undefined,
  order: undefined,
  onSearchChange: undefined,
  searchValue: undefined,
};

export default DataTable;
