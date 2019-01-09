/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';


class SimpleTable extends Component {
  state = { key: uuidv4() }

  mapCell(data, column, rowData, rowIdx) {
    const { key } = this.state;
    if (column.render) {
      return <td key={`${key}-${rowIdx}-${column.data}`}>{column.render(data, rowData, rowIdx)}</td>;
    }
    return <td key={`${key}-${rowIdx}-${column.data}`}>{data}</td>;
  }

  render() {
    const {
      data, columns, noMargin, condensed, striped, border, hover, responsive,
    } = this.props;
    const { key } = this.state;
    const mappedColumns = data ? data.map((row, rowIdx) => (
      <tr key={`${key}-${rowIdx}`}>
        {columns.map(col => this.mapCell(row[col.data], col, row, rowIdx))}
      </tr>
    )) : <tr><td colSpan={columns.length} className="text-center">No matching records found</td></tr>;
    let headers;
    const hasHeaders = columns.filter(p => p.title).length > 0;
    if (hasHeaders) { headers = columns.map(p => <th key={`${key}-${p.title}`} style={{ width: p.width }}>{p.title}</th>); }

    const classNames = [
      'table',
      noMargin ? 'no-margin' : null,
      condensed ? 'table-condensed' : null,
      striped ? 'table-striped' : null,
      border ? 'table-bordered' : null,
      hover ? 'table-hover' : null,
    ].filter(p => p).join(' ');

    const table = (
      <table key={key} className={classNames}>
        {hasHeaders && (
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
        )}
        <tbody>
          {mappedColumns}
        </tbody>
      </table>
    );
    if (!responsive) {
      return table;
    }
    return <div className="table-responsive">{table}</div>;
  }
}

SimpleTable.propTypes = {
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
};

SimpleTable.defaultProps = {
  data: null,
  columns: null,
  condensed: false,
  striped: false,
  noMargin: false,
  border: false,
  responsive: false,
  hover: false,
};

export default SimpleTable;
