import React, { Component } from 'react';

interface Props {

}
interface State {

}

class ControlSidebarEntry extends Component<Props, State> {
  state = {};

  render() {
    return (
      <li>
        {/* TODO: fix linter error */
        /* eslint-disable jsx-a11y/anchor-is-valid */}
        <a data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
      </li>
    );
  }
}

export default ControlSidebarEntry;
