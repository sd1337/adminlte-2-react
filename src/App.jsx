import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuidv4 from 'uuid';

import AdminLTE, {
  Sidebar, Navbar, Footer, ControlSidebar, AsyncComponent,
} from './components/AdminLTE';
import Dashboard from './pages/Dashboard';
import DashboardV2 from './pages/DashboardV2'; 
import ChartJS from './pages/charts/ChartJS';
import Widgets from './pages/Widgets';
import Default from './pages/ui-elements/modals/Default';

class App extends Component {
  state = {
    notifications: [{
      iconClass: 'fa-users',
      iconColor: 'aqua',
      text: '5 new members joined today',
    }, {
      iconClass: 'fa-warning',
      iconColor: 'yellow',
      text: 'Very long description here that may not fit into the page and may cause design problems',
    }, {
      iconClass: 'fa-users',
      iconColor: 'red',
      text: '5 new members joined',
    }],
  }

  render() {
    const { notifications } = this.state;
    return (
      <Router>
        <AdminLTE theme="blue" browserTitle="AdminLTE 2 | Dashboard" title={['Admin', 'LTE']}>
          <Navbar.Menu>
            <Navbar.MenuEntry
              iconClass="fa-envelope-o"
              headerText="You have #value# messages"
              footerText="See All Messages"
              entryClass="messages-menu"
            >
              <Navbar.Item />
              <Navbar.Item />
            </Navbar.MenuEntry>
            <Navbar.MenuEntry
              iconClass="fa-bell-o"
              labelClass="warning"
              headerText="You have #value# notifications"
              footerText="View All"
              entryClass="notifications-menu"
            >
              {notifications.map(p => <Navbar.SimpleItem key={uuidv4()} iconClass={p.iconClass} iconColor={p.iconColor}>{p.text}</Navbar.SimpleItem>)}
            </Navbar.MenuEntry>
            <Navbar.MenuEntry
              iconClass="fa-flag-o"
              labelClass="danger"
              headerText="You have #value# tasks"
              footerText="View all tasks"
              entryClass="tasks-menu"
            >
              <Navbar.TaskItem to="/" value={20} barColor="aqua">Design some buttons</Navbar.TaskItem>
              <Navbar.TaskItem to="/" value={40} barColor="green">Create a nice theme</Navbar.TaskItem>
            </Navbar.MenuEntry>
          </Navbar.Menu>
          <Sidebar.Core>
            <li className="header">MAIN NAVIGATION</li>
            <Sidebar.Item active text="Dashboard" icon="fa-dashboard">
              <Sidebar.Item text="Dashboard v1" link="/dashboard" />
              <Sidebar.Item text="Dashboard v2" link="/dashboardv2" />
            </Sidebar.Item>
            <Sidebar.Item link="#" text="Layout Options" icon="fa-files-o" labels={[{ type: 'primary', text: 4 }]}>
              <Sidebar.Item text="Top Navigation" link="/top-nav" />
              <Sidebar.Item text="Boxed" link="/boxed" />
              <Sidebar.Item text="Fixed" link="/fixed" />
              <Sidebar.Item text="Collapsed Sidebar" link="/collapsed-sidebar" />
            </Sidebar.Item>
            <Sidebar.Item link="/widgets" text="Widgets" icon="fa-th" labels={[{ color: 'green', text: 'new', small: true }]} />
            <Sidebar.Item text="Charts" icon="fa-pie-chart">
              <Sidebar.Item text="ChartJS" link="/chart-js" />
              <Sidebar.Item text="Morris" link="/morris" />
              <Sidebar.Item text="Flot" link="/flot" />
              <Sidebar.Item text="Collapsed Sidebar" link="/collapsed-sidebar" />
            </Sidebar.Item>
            <Sidebar.Item link="#" text="UI Elements" icon="fa-laptop">
              <Sidebar.Item text="General" link="/ui-elements/general" />
              <Sidebar.Item text="Icons" link="/ui-elements/icons" />
              <Sidebar.Item text="Buttons" link="/ui-elements/buttons" />
              <Sidebar.Item text="Sliders" link="/ui-elements/sliders" />
              <Sidebar.Item text="Timeline" link="/ui-elements/timeline" />
              <Sidebar.Item text="Modals" link="/ui-elements/modals" />
            </Sidebar.Item>
            <Sidebar.Item link="#" text="Forms" icon="fa-edit">
              <Sidebar.Item text="General Elements" link="/forms/general" />
              <Sidebar.Item text="Advanced Elements" link="/forms/advanced" />
              <Sidebar.Item text="Editors" link="/forms/editors" />
            </Sidebar.Item>
            <Sidebar.Item link="#" text="Tables" icon="fa-edit">
              <Sidebar.Item text="Simple tables" link="/tables/simple" />
              <Sidebar.Item text="Data tables" link="/tables/data" />
            </Sidebar.Item>
            <Sidebar.Item link="/calendar" text="Calendar" icon="fa-calendar" labels={[{ small: true, text: 3, color: 'red' }, { small: true, text: 17, color: 'blue' }]}>
            </Sidebar.Item>
            <Sidebar.Item link="/mailbox" text="Mailbox" icon="fa-envelope" labels={[{ small: true, text: 12, color: 'yellow' }, { small: true, text: 16, color: 'green' }, { small: true, text: 5, color: 'red' }]} />
            <Sidebar.Item link="#" text="Examples" icon="fa-folder">
              <Sidebar.Item text="Invoice" link="/examples/invoice" />
              <Sidebar.Item text="Profile" link="/examples/profile" />
              <Sidebar.Item text="Login" link="/examples/login" />
              <Sidebar.Item text="Register" link="/examples/register" />
              <Sidebar.Item text="Lockscreen" link="/examples/lockscreen" />
              <Sidebar.Item text="404 Error" link="/examples/404-error" />
              <Sidebar.Item text="500 Error" link="/examples/500-error" />
              <Sidebar.Item text="Blank Page" link="/examples/blank-page" />
              <Sidebar.Item text="Pace Page" link="/examples/pace-page" />
            </Sidebar.Item>
            <Sidebar.Item link="#" text="Multilevel" icon="fa-share">
              <Sidebar.Item text="Level One" link="/mulitlevel/one" />
              <Sidebar.Item text="Level One" link="/mulitlevel/one">
                <Sidebar.Item text="Level Two" link="/mulitlevel/two" />
                <Sidebar.Item text="Level Two" link="/mulitlevel/two">
                  <Sidebar.Item text="Level Tree" link="/mulitlevel/tree" />
                  <Sidebar.Item text="Level Tree" link="/mulitlevel/tree" />
                </Sidebar.Item>
                <Sidebar.Item text="Level Two" link="/mulitlevel/two" />
              </Sidebar.Item>
              <Sidebar.Item text="Level One" link="/mulitlevel/one" />
            </Sidebar.Item>
            <Sidebar.Item link="/component-test" text="Component Tests" icon="fa-circle-o" color="aqua" />
            <li className="header">LABELS</li>
            <Sidebar.Item link="#" text="Important" icon="fa-circle-o" color="red" />
            <Sidebar.Item link="#" text="Warning" icon="fa-circle-o" color="yellow" />
            <Sidebar.Item link="#" text="Information" icon="fa-circle-o" color="aqua" />
          </Sidebar.Core>
          <DashboardV2 path="/" exact />
          <Dashboard path="/dashboard" exact />
          <DashboardV2 path="/dashboardv2" exact />
          <ChartJS path="/chart-js" exact />
          <Widgets path="/widgets" exact />
          <Route path="/ui-elements/general" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.general' */'./pages/ui-elements/General'))} />
          <Route path="/ui-elements/icons" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.icons' */'./pages/ui-elements/Icons'))} />
          <Route path="/ui-elements/buttons" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.buttons' */'./pages/ui-elements/Buttons'))} />
          <Route path="/ui-elements/sliders" exact component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.sliders' */'./pages/ui-elements/Sliders'))} />
          <Route path="/ui-elements/modals" component={AsyncComponent(() => import(/* webpackChunkName: 'ui-elements.modals' */'./pages/ui-elements/Modals'))} />
          <Default path="/ui-elements/modals/default" exact modal />
          <Route path="/forms/general" exact component={AsyncComponent(() => import(/* webpackChunkName: 'form.general' */'./pages/forms/GeneralElements'))} />
          <Route path="/forms/advanced" exact component={AsyncComponent(() => import(/* webpackChunkName: 'form.advanced' */'./pages/forms/AdvancedElements'))} />
          <Route path="/tables/simple" exact component={AsyncComponent(() => import(/* webpackChunkName: 'tables.simple' */'./pages/tables/SimpleTables'))} />
          <Route path="/tables/data" exact component={AsyncComponent(() => import(/* webpackChunkName: 'tables.data' */'./pages/tables/DataTables'))} />
          <Route path="/calendar" exact component={AsyncComponent(() => import(/* webpackChunkName: 'calendar' */'./pages/Calendar'))} />
          <Route path="/component-test" exact component={AsyncComponent(() => import(/* webpackChunkName: 'component-test' */'./pages/ComponentTest'))} />
          <Footer />
          <ControlSidebar />
        </AdminLTE>
      </Router>
    );
  }
}

export default App;
