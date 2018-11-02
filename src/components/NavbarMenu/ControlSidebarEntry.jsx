import React, { Component } from 'react';

class ControlSidebarEntry extends Component {
  state = {}

  render() {
    return (
      <li>
        {/* TODO: fix linter error */
        /* eslint-disable jsx-a11y/anchor-is-valid */}
        <a data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
      </li>);
  }
}

export default ControlSidebarEntry;
