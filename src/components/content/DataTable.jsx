import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-select-bs/css/select.bootstrap.css';

const uuidv4 = require('uuid/v4');
const $ = require('jquery');
$.DataTable = require('datatables.net-bs');
require('datatables.net-select-bs');

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
      ajaxMap, ajaxResponseMap, data, columns, setDataTableRef, onSelect, onDeselect,
    } = this.props;
    if (ajaxMap) {
      $(this.main).on('preXhr.dt', ajaxMap);
    }
    if (ajaxResponseMap) {
      $(this.main).on('xhr.dt', ajaxResponseMap);
    }
    const { options } = this.state;

    const api = $(this.main).dataTable({
      //    dom: '<"data-table-wrapper"t>',
      data,
      columns: (options && options.columns) || columns,
      // ordering: false,
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
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    $(this.main)
      .dataTable()
      .api()
      .destroy(true);
  }

  render() {
    const {
      options, columns, footer, hover, border, condensed,
    } = this.props;
    const columns2 = (options && options.columns) || columns;
    const hasFooter = !!(footer);
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
          {hasFooter && <tfoot><tr>{headerColumns}</tr></tfoot>}
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
  data: PropTypes.shape({

  }),
  columns: PropTypes.shape({

  }),
  setDataTableRef: PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  hover: PropTypes.bool,
  border: PropTypes.bool,
  condensed: PropTypes.bool,
};

DataTable.defaultProps = {
  ajaxMap: null,
  ajaxResponseMap: null,
  data: null,
  columns: null,
  setDataTableRef: null,
  onSelect: null,
  onDeselect: null,
  footer: null,
  hover: true,
  border: false,
  condensed: false,
};

export default DataTable;
