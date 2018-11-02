/* eslint-disable */
/*TODO: fix linter errors */
import React, { Component } from 'react';

class ControlSidebar extends Component {
  state = {}
  render() {
    return (
      <div>
        <aside className="control-sidebar control-sidebar-dark">
          {/* Create the tabs */}
          <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
            <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home" /></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears" /></a></li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            {/* Home tab content */}
            <div className="tab-pane" id="control-sidebar-home-tab">
              <h3 className="control-sidebar-heading">Recent Activity</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a>
                    <i className="menu-icon fa fa-birthday-cake bg-red" />

                    <div className="menu-info">
                      <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                      <p>Will be 23 on April 24th</p>
                    </div>
                  </a>
                </li>
              </ul>
              {/* /.control-sidebar-menu */}

              <h3 className="control-sidebar-heading">Tasks Progress</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a>
                    <h4 className="control-sidebar-subheading">
                      Custom Template Design
                      <span className="label label-danger pull-right">70%</span>
                    </h4>

                    <div className="progress progress-xxs">
                      <div className="progress-bar progress-bar-danger" style={{ width: "70%" }} />
                    </div>
                  </a>
                </li>
              </ul>
              {/* /.control-sidebar-menu */}

            </div>
            {/* /.tab-pane */}

            {/* Settings tab content */}
            <div className="tab-pane" id="control-sidebar-settings-tab">
              <form method="post">
                {/* /.form-group */}
              </form>
            </div>
            {/* /.tab-pane */}
          </div>
        </aside>
        <div className="control-sidebar-bg" />
      </div>
    );
  }
}

export default ControlSidebar;