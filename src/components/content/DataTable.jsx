import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-select-bs/css/select.bootstrap.css';
import './DataTable.css';
import { arrayEquals } from '../Utilities';

const uuidv4 = require('uuid/v4');
const $ = require('jquery');
$.DataTable = require('datatables.net-bs');
require('datatables.net-select-bs');

const camelToKebap = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

class DataTable extends Component {
  state = {
    options: null,
  }

  constructor(props) {
    super(props);
    const { options } = props;
    this.state.options = options;
  }

  componentDidMount() {
    const {
      ajaxMap, ajaxResponseMap, data, columns, setDataTableRef, onSelect, onDeselect, onClickEvents,
    } = this.props;
    if (ajaxMap) {
      $(this.main).on('preXhr.dt', ajaxMap);
    }
    if (ajaxResponseMap) {
      $(this.main).on('xhr.dt', ajaxResponseMap);
    }
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
        const data2 = dt.data();
        onSelect(data2);
      });
    }
    if (onDeselect) {
      api.on('deselect', (e, dt) => {
        const data2 = dt.data();
        onDeselect(data2);
      });
    }
    
    if (onClickEvents) {
      this.bindOnClickEvents(onClickEvents, api);
    }
  }

  shouldComponentUpdate({ data, selectedRows }) {
    const { data: propData, selectedRows: propSelectedRows } = this.props;
    if (data !== propData
      || !arrayEquals(selectedRows, propSelectedRows)) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const { onClickEvents } = this.props;
    const { api } = this;
    const ids = [];
    $('.selected', this.main).each(function each() {
      ids.push(this.id);
    });

    api.clear();
    const { data } = this.props;
    if (data) { api.rows.add(data); }
    api.draw();
    let { selectedRows } = this.props;
    if (selectedRows) {
      selectedRows = selectedRows.length ? selectedRows : [selectedRows];
      selectedRows.forEach((item) => {
        // eslint-disable-next-line eqeqeq
        if (!ids.find(p => p == selectedRows[0])) api.row(`#${item}`).select();
        else $(`#${item}`, this.main).addClass('selected');
      });
    }
    if (onClickEvents) {
      this.bindOnClickEvents(onClickEvents, api);
    }
  }

  componentWillUnmount() {
    $(this.main)
      .dataTable()
      .api()
      .destroy(true);
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

  render() {
    const {
      options, columns, footer, hover, border, condensed,
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
    return (
      <div>
        <table ref={(c) => { this.main = c; }} className={classes} width="100%">
          <thead><tr>{headerColumns}</tr></thead>
          {footer && <tfoot><tr>{headerColumns}</tr></tfoot>}
        </table>
      </div>
    );
  }
}

DataTable.propTypes = {
  options: PropTypes.shape({

  }).isRequired,
  ajaxMap: PropTypes.func,
  ajaxResponseMap: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({ })),
  columns: PropTypes.arrayOf(PropTypes.shape({ })),
  setDataTableRef: PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  footer: PropTypes.bool,
  hover: PropTypes.bool,
  border: PropTypes.bool,
  condensed: PropTypes.bool,
  selectedRows: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ }),
    PropTypes.arrayOf(PropTypes.number,),
    PropTypes.arrayOf(PropTypes.shape({ })),
  ]),
  onClickEvents: PropTypes.shape({ }),
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
