/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import uuidv4 from 'uuid';
import { arrayEquals } from '../Utilities';
import { ColumnType, DataType, SelectedRowType } from './TableProps';

interface SimpleTableProps {
  data?: DataType,
  columns: Array<ColumnType>,
  condensed?: boolean,
  striped?: boolean,
  noMargin?: boolean,
  border?: boolean,
  responsive?: boolean,
  hover?: boolean,
  onSelect?: Function,
  simpleCompare?: boolean,
}

interface SimpleTableState {
  key: string,
  selectedRow?: SelectedRowType
  mappedData?: any
}

class SimpleTable extends Component<SimpleTableProps, SimpleTableState> {
  static defaultProps = {
    data: null,
    columns: null,
    condensed: false,
    striped: false,
    noMargin: false,
    border: false,
    responsive: false,
    hover: false,
    onSelect: undefined,
    simpleCompare: false,
  };

  constructor(props: SimpleTableProps) {
    super(props);
    const {
      data, columns,
    } = props;
    const { key, selectedRow } = this.state;
    const mappedColumns = data ? data.map((row: any, rowIdx: number) => (
      <tr className={selectedRow && selectedRow === rowIdx ? 'selected' : ''} key={`${key}-${rowIdx}`} onClick={() => { this.onSelect(row, rowIdx); }}>
        {columns.map((col) => this.mapCell(row[col.data], col, row, rowIdx))}
      </tr>
    )) : <tr><td colSpan={columns.length} className="text-center">No matching records found</td></tr>;
    this.state.mappedData = mappedColumns;
  }

  state: SimpleTableState = { key: uuidv4() };

  componentDidUpdate({
    data: oldData,
  }: SimpleTableProps, { selectedRow: oldSelectedRow }: SimpleTableState) {
    const {
      data, simpleCompare,
    } = this.props;
    const { selectedRow } = this.state;
    let dataChanged;
    if (!simpleCompare) {
      dataChanged = !arrayEquals(oldData, data);
    } else if (oldData !== data && oldData !== undefined && data !== undefined) {
      dataChanged = oldData.length !== data.length;
    }
    const rowSelectionChanged = oldSelectedRow !== selectedRow;
    if (dataChanged || rowSelectionChanged) {
      this.updateStateData();
    }
  }

  onSelect = (data: DataType, rowIdx: number) => {
    const { onSelect } = this.props;
    if (onSelect) {
      onSelect(data);
    }
    this.setState({
      selectedRow: rowIdx,
    });
  };

  updateStateData = () => {
    const {
      data, columns,
    } = this.props;
    const { key, selectedRow } = this.state;
    const mappedColumns = data ? data.map((row: DataType, rowIdx: number) => (
      <tr className={selectedRow !== undefined && selectedRow === rowIdx ? 'selected' : ''} key={`${key}-${rowIdx}`} onClick={() => { this.onSelect(row, rowIdx); }}>
        {columns.map((col) => this.mapCell(row[col.data], col, row, rowIdx))}
      </tr>
    )) : <tr><td colSpan={columns.length} className="text-center">No matching records found</td></tr>;
    this.setState({
      mappedData: mappedColumns,
    });
  };

  mapCell(data: any, column: any, rowData: any, rowIdx: number) {
    const { key } = this.state;
    if (column.render) {
      return <td key={`${key}-${rowIdx}-${column.data}`}>{column.render(data, rowData, rowIdx)}</td>;
    }
    return <td key={`${key}-${rowIdx}-${column.data}`}>{data}</td>;
  }

  render() {
    const {
      columns, noMargin, condensed, striped, border, hover, responsive,
    } = this.props;
    const { key, mappedData } = this.state;
    let headers;
    const hasHeaders = columns.filter((p) => p.title).length > 0;
    if (hasHeaders) { headers = columns.map((p) => <th key={`${key}-${p.title}`} style={{ width: p.width }}>{p.title}</th>); }

    const classNames = [
      'table',
      noMargin ? 'no-margin' : null,
      condensed ? 'table-condensed' : null,
      striped ? 'table-striped' : null,
      border ? 'table-bordered' : null,
      hover ? 'table-hover' : null,
    ].filter((p) => p).join(' ');

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
          {mappedData}
        </tbody>
      </table>
    );
    if (!responsive) {
      return table;
    }
    return <div className="table-responsive">{table}</div>;
  }
}

export default SimpleTable;
