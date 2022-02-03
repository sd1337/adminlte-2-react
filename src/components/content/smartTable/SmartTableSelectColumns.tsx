import React, { Component } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Button from '../Button';
import { getSortDirection } from './SmartTableUtils';
import { SmartColumnType, SmartOrderType, SmartTableOrderDirection } from './SmartTableTypes';

const rowHeight = 51;

interface SmartTableSelectColumnsProps {
  columns: SmartColumnType[]
  order: SmartOrderType[],
  hiddenColumns: string[],
  stateToUpdate?: Function,
  classPreFix: string,
}

interface SmartTableSelectColumnsState {
  columns: SmartColumnType[]
  order: SmartOrderType[],
  hiddenColumns: string[],
  drag?: {
    index: number,
    offset: number,
  }
}

class SmartTableSelectColumns extends Component<SmartTableSelectColumnsProps, SmartTableSelectColumnsState> {
  static defaultProps = {
    stateToUpdate: undefined,
  };

  constructor(props: SmartTableSelectColumnsProps) {
    super(props);
    const {
      hiddenColumns, order,
      columns,
    } = props;
    this.state = {
      hiddenColumns,
      order,
      columns,
      drag: undefined,
    };
  }

  handleStart = (_event: DraggableEvent, info: DraggableData) => {
    const {
      classPreFix,
    } = this.props;
    const classListArray = Array.from(info?.node?.classList);
    const foundClasses = classListArray.find((p) => p.startsWith(`${classPreFix}-select-col-`));
    if (foundClasses) {
      const index = parseInt(foundClasses.replace(`${classPreFix}-select-col-`, ''), 10);
      this.dragIndex = index;
    }
  };

  handleStop = (_event: DraggableEvent, info: DraggableData) => {
    const { y } = info;
    const {
      columns,
    } = this.state;
    const {
      stateToUpdate,
    } = this.props;
    const yNormalized = y / rowHeight;
    if (this.dragIndex) {
      const newIndex = Math.round(this.dragIndex + yNormalized);
      let newColumns: SmartColumnType[] = [];
      let isDirty = false;
      if (newIndex - this.dragIndex > 0) {
        newColumns = newColumns.concat(columns.slice(0, this.dragIndex));
        newColumns = newColumns.concat(columns.slice(this.dragIndex + 1, newIndex + 1));
        newColumns.push(columns[this.dragIndex]);
        newColumns = newColumns.concat(columns.slice(newIndex + 1));
        this.setState({
          columns: newColumns,
          drag: undefined,
        });
        isDirty = true;
      } else if (newIndex - this.dragIndex < 0) {
        newColumns = newColumns.concat(columns.slice(0, newIndex));
        newColumns.push(columns[this.dragIndex]);
        newColumns = newColumns.concat(columns.slice(newIndex, this.dragIndex));
        newColumns = newColumns.concat(columns.slice(this.dragIndex + 1));
        this.setState({
          columns: newColumns,
          drag: undefined,
        });
        isDirty = true;
      } else {
        this.setState({
          drag: undefined,
        });
      }
      if (isDirty) {
        const newState = {
          columns: newColumns,
        };
        this.setState(newState);
        if (stateToUpdate) {
          stateToUpdate(newState);
        }
      }
      this.dragIndex = undefined;
    }
  };

  handleDrag = (_event: DraggableEvent, info: DraggableData) => {
    const { y } = info;
    const yNormalized = y / rowHeight;
    this.setState({
      drag: {
        index: (this.dragIndex as number),
        offset: yNormalized,
      },
    });
  };

  dragIndex?: number;

  toggleVisibility = (e: React.MouseEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, checked } = (target as HTMLInputElement);
    const {
      hiddenColumns,
    } = this.state;
    const { stateToUpdate } = this.props;
    let isDirty = false;
    let newHiddenCols = [...hiddenColumns];
    const col = name.split('-')[1];
    if (checked) {
      newHiddenCols = newHiddenCols.filter((p2) => p2 !== col);
      isDirty = true;
    } else {
      const isVisible = newHiddenCols.find((p2) => p2 === col) === undefined;
      if (isVisible) {
        newHiddenCols.push(col);
        isDirty = true;
      }
    }
    if (isDirty) {
      const newState = {
        hiddenColumns: newHiddenCols,
      };
      this.setState(newState);
      if (stateToUpdate) {
        stateToUpdate(newState);
      }
    }
  };

  toggleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = e;
    const { name, value } = target;
    const {
      order,
    } = this.state;
    const { stateToUpdate } = this.props;
    let isDirty = false;
    let newOrder = [...order];
    const col = name.split('-')[1];
    const found = newOrder.find((p2) => p2.column === col);
    if (found) {
      isDirty = true;
      if (value !== 'none') {
        found.direction = (value as SmartTableOrderDirection);
      } else {
        newOrder = newOrder.filter((p2) => p2.column !== col);
      }
    } else if (value !== 'none') {
      isDirty = true;
      newOrder.push({
        column: col,
        direction: (value as SmartTableOrderDirection),
      });
    }
    if (isDirty) {
      const newState = {
        order: newOrder,
      };
      this.setState(newState);
      if (stateToUpdate) {
        stateToUpdate(newState);
      }
    }
  };

  render() {
    const {
      classPreFix,
    } = this.props;
    const {
      hiddenColumns, order, columns,
      drag,
    } = this.state;
    const noOfCols = columns.length;
    const mappedData = columns.map((p, i) => {
      const colOrdering = order.find((p2) => p2.column === p.data);
      const direction = getSortDirection(colOrdering);
      const isVisible = hiddenColumns.find((p2) => p2 === p.data) === undefined;
      const top = rowHeight * i * -1;
      const bottom = rowHeight * (noOfCols - i - 1);
      const position = { x: 0, y: 0 };
      if (drag) {
        const { index, offset } = drag;
        const calcIndex = index + offset;
        if (offset > 0) {
          if (i > index && i <= calcIndex) {
            position.y = -rowHeight;
          }
        } else if (offset < 0) {
          if (i < index && i >= calcIndex) {
            position.y = rowHeight;
          }
        }
      }
      return (
        <Draggable
          key={`draggable-${p.data}`}
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={position}
          grid={[1, 1]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          bounds={{
            top,
            bottom,
            left: -20,
            right: 20,
          }}
        >
          <tr className={`${classPreFix}-select-col-${i}`}>
            <td className="handle"><Button icon="fas-grip-horizontal" /></td>
            <td>{p.title}</td>
            <td>
              <select name={`order-${p.data}`} value={direction} onChange={this.toggleOrder} disabled={!(p.toggleOrder !== undefined ? p.toggleOrder : true)}>
                <option value="none">None</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </td>
            <td><input name={`visibility-${p.data}`} checked={isVisible} type="checkbox" onClick={this.toggleVisibility} disabled={!(p.toggleHidden !== undefined ? p.toggleHidden : true)} /></td>
          </tr>
        </Draggable>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th> </th>
            <th>Column</th>
            <th>Order</th>
            <th>Visible</th>
          </tr>
        </thead>
        <tbody>
          {mappedData}
        </tbody>
      </table>
    );
  }
}

export default SmartTableSelectColumns;
