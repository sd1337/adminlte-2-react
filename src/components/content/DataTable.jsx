import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-select-bs/css/select.bootstrap.css';

import Pagination from './Pagination';
import './DataTable.css';
import { arrayEquals } from '../Utilities';

const uuidv4 = require('uuid/v4');
const $ = require('jquery');
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
    const { options } = props;
    const { paging, info, pageLength, ...clearedOptions } = options;
    this.state.options = { paging: 10, info: false, pageLength: pageLength || 10, ...clearedOptions };
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
    data, selectedRows, footer, options,
  }, { page: oldPage }) {
    const {
      data: propData, selectedRows: propSelectedRows, footer: propFooter, options: propOptions,
    } = this.props;
    const { page } = this.state;
    if (data !== propData
      || !arrayEquals(selectedRows, propSelectedRows)
      || footer !== propFooter
      || JSON.stringify(options) !== JSON.stringify(propOptions)
      || oldPage !== page
    ) {
      return true;
    }
    return false;
  }

  componentDidUpdate({ data: oldData, footer: oldFooter, selectedRows: oldSelectedRows }) {
    const { onClickEvents, footer } = this.props;
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

    const ids = [];
    $('.selected', main).each(function each() {
      ids.push(this.id);
    });
    const { data } = this.props;
    if (!arrayEquals(oldData, data)) {
      const currentPage = api.page();
      api.clear();
      if (data) { api.rows.add(data); }
      api.draw();
      this.setActivePage(currentPage);
    }
    let { selectedRows } = this.props;
    if (selectedRows) {
      selectedRows = typeof selectedRows !== 'string' && selectedRows.length ? selectedRows : [selectedRows];
      api.rows({ selected: true }).deselect();
      if (!arrayEquals(selectedRows, oldSelectedRows)) {
        const rowsToSelect = [];
        api.rows().every(function every() {
          if (selectedRows.indexOf(this.data().browser) >= 0) {
            rowsToSelect.push(this.node());
          }
        });
        this.disableRowSelectEvent = true;
        api.rows(rowsToSelect).select();
        this.disableRowSelectEvent = false;
      }
    }
    if (onClickEvents) {
      this.bindOnClickEvents(onClickEvents, api);
    }
  }

  componentWillUnmount() {
    this.destroyDatatables();
  }

  setActivePage(page) {
    const { api } = this;
    api.page(page);
    api.draw(false);
    this.setState({ page });
  }

  initializeDatatables() {
    const {
      data, columns, setDataTableRef, onSelect, onDeselect, onClickEvents,
    } = this.props;
    const { options } = this.state;
    const api = $(this.main).dataTable({
      data,
      columns: (options && options.columns) || columns,
      ...options,
    }).api();
    this.api = api;
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

    if (onClickEvents) {
      this.bindOnClickEvents(onClickEvents, api);
    }
  }

  destroyDatatables() {
    $(this.main)
      .dataTable()
      .api()
      .destroy(true);
  }

  createDomObject() {
    const {
      border, hover, condensed, columns, footer, options,
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
      <table ref={(c) => { this.main = c; }} className={classes} width="100%">
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
    const { data, options } = this.props;
    const { page } = this.state;
    const { paging, info: infoOption } = options;
    const language = options.language || defaultLanguageOptions;
    const selected = (this.api && this.api.rows({ selected: true })[0].length) || 0;
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
    if (data.length && data.length > 0) {
      dtInfo = info.replace('_START_', 1 + 10 * page).replace('_END_', Math.min(10 * page + 10, data.length)).replace('_TOTAL_', data.length);
    } else {
      dtInfo = infoEmpty;
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
      selectInfo = rows[0] || '';
    }
    return (
      <Row>
        <Col sm={5}>
          {(!(infoOption === false)) && (
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
              activePage={page}
              totalElements={data.length}
              pageSize={10}
              onChange={this.setActivePage}
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
        {this.renderPagination()}
      </div>
    );
  }
}

DataTable.propTypes = {
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
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  onClickEvents: PropTypes.shape({}),
};

DataTable.defaultProps = {
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
};

export default DataTable;
