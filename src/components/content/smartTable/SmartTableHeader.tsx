import React, { Component } from 'react';
import {
  SmartColumnType, SmartOrderType, SmartTableHeaderSortIcons, SmartTableOrderChangedCallback,
  SmartTableHeaderOrderDirection,
} from './SmartTableTypes';

interface SmartTableHeaderProps {
  smartTableKey: string,
  column: SmartColumnType,
  classPreFix: string,
  sortIcons: SmartTableHeaderSortIcons,
  order: SmartOrderType[],
  orderChanged: SmartTableOrderChangedCallback,
}
interface SmartTableHeaderState {
  open: boolean
}

class SmartTableHeader extends Component<SmartTableHeaderProps, SmartTableHeaderState> {
  state = { open: false };

  toggleOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const {
      smartTableKey: key, column, classPreFix, sortIcons,
      order, orderChanged,
    } = this.props;
    const { open } = this.state;
    const {
      data, width, title, toggleOrder,
    } = column;
    const sortObject = order.find((p2) => p2.column === data);
    let icon = sortIcons.default;
    let param: SmartTableHeaderOrderDirection = 'asc';
    if (sortObject) {
      let isAsc;
      let isDesc;
      const { direction } = sortObject;
      if (typeof direction === 'string') {
        isAsc = direction.toLowerCase() === 'asc';
        isDesc = direction.toLowerCase() === 'desc';
      } else if (typeof direction === 'number') {
        isAsc = direction === 1;
        isDesc = direction === -1;
      }
      if (isAsc) {
        icon = sortIcons.up;
        param = 'desc';
      } else if (isDesc) {
        icon = sortIcons.down;
        param = 'none';
      }
    }
    const canToggle = !(toggleOrder === false);
    const onClick = !canToggle ? undefined : () => orderChanged(data, param);
    const addition = canToggle ? '' : ` ${classPreFix}-column-header-sort-disabled`;
    const handleKeyPress = (e: any) => {
      //
      console.log(e);
    };
    return (
      <th key={`${key}-${title}`} className={`${classPreFix}-column-header${open ? ' open' : ''}`} style={{ width }}>
        <span onClick={this.toggleOpen} onKeyPress={() => {}} role="button" tabIndex={0}>{title}</span>
        {'  '}
        <div role="button" tabIndex={0} className={`${classPreFix}-column-header-sort${addition}`} onClick={onClick} onKeyPress={handleKeyPress}>{icon}</div>
      </th>
    );
  }
}

export default SmartTableHeader;
