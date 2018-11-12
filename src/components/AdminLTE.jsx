/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import '../css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import '../css/ionicons.min.css';
import 'source-sans-pro/source-sans-pro.css';
import '../adminlte/css/AdminLTE.css';

import 'jquery';
import 'bootstrap';
import '../adminlte/js/adminlte';
import 'jquery-sparkline';

import * as Sidebar from './Sidebar/Sidebar';
import Content from './Content';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';
import * as Navbar from './NavbarMenu/Menu';
import Row from './content/Row';
import Col from './content/Col';
import Infobox from './content/Infobox';
import Box from './content/Box';
import DescriptionBlock from './content/DescriptionBlock';
import ProgressGroup from './content/ProgressGroup';
import Button from './content/Button';
import ButtonGroup from './content/ButtonGroup';
import DataTable from './content/DataTable';
import Checkbox from './content/Checkbox';
import Tabs from './content/Tabs';
import TabContent from './content/TabContent';
import Description from './content/Description';
import DescriptionItem from './content/DescriptionItem';
import Margin from './content/Margin';
import SparklineBox from './content/SparklineBox';
import Chatbox from './content/Chatbox';
import Memberbox from './content/Memberbox';
import SimpleTable from './content/SimpleTable';
import Sparkbar from './content/Sparkbar';
import NavList from './content/NavList';
import NavListItem from './content/NavListItem';
import ProductList from './content/ProductList';
import ProductListItem from './content/ProductListItem';
import Infobox2 from './content/Infobox2';
import Alert from './content/Alert';
import Callout from './content/Callout';
import ProgressBar from './content/ProgressBar';
import Divider from './content/Divider';
import * as Inputs from './content/Inputs';
import LoginCore from './content/LoginCore';
import AsyncComponent from './AsyncComponent';
import {
  Colors, Types, Sizes, FormTypes, Themes,
} from './PropTypes';
import Badge from './content/Badge';
import Label from './content/Label';
import Calendar from './content/Calendar';


library.add(fab, fas, far);

class Core extends Component {
  componentDidMount() {
    const { theme = 'blue', browserTitle } = this.props;
    if (theme) {
      document.body.className += ` skin-${theme} sidebar-mini`;
    }
    document.title = browserTitle;
    switch (theme) {
      case 'black-light':
        require('../adminlte/css/skins/skin-black-light.css');
        break;
      case 'black':
        require('../adminlte/css/skins/skin-black.css');
        break;
      case 'blue':
        require('../adminlte/css/skins/skin-blue.css');
        break;
      case 'blue-light':
        require('../adminlte/css/skins/skin-blue-light.css');
        break;
      case 'green':
        require('../adminlte/css/skins/skin-green.css');
        break;
      case 'green-light':
        require('../adminlte/css/skins/skin-green-light.css');
        break;
      case 'purple':
        require('../adminlte/css/skins/skin-purple.css');
        break;
      case 'purple-light':
        require('../adminlte/css/skins/skin-purple-light.css');
        break;
      case 'red':
        require('../adminlte/css/skins/skin-red.css');
        break;
      case 'red-light':
        require('../adminlte/css/skins/skin-red-light.css');
        break;
      case 'yellow':
        require('../adminlte/css/skins/skin-yellow.css');
        break;
      case 'yellow-light':
        require('../adminlte/css/skins/skin-yellow-light.css');
        break;
      default:
        require('../adminlte/css/skins/skin-blue.css');
        break;
    }
  }

  render() {
    let { children, title, titleShort } = this.props;
    {
      if (!children.length) { children = [children]; }
      let temp = children.filter(p => Object.prototype.toString.call(p) !== '[object Array]');
      children.filter(p => Object.prototype.toString.call(p) === '[object Array]').forEach((p) => { temp = temp.concat(p); });
      children = temp;
    }
    if (!title.length) {
      title = [title];
    }
    const [titleBold, titlethin = ''] = title;
    if (!titleShort.length) {
      titleShort = [titleShort];
    }
    const [titleShortBold, titleShotThin = ''] = titleShort;
    let [menu] = children && children.length && children.filter(p => typeof p.type === 'function' && p.type.name === 'Menu');
    if (children.findIndex(p => typeof p.type === 'function' && p.type.name === 'ControlSidebar') > 0) {
      menu = React.cloneElement(menu, { additionalMenus: [<Navbar.ControlSidebarEntry key="control-sidebar-entry"></Navbar.ControlSidebarEntry>] });
    }
    const content = children.filter(p => p !== menu);
    const routes = content.filter(p => (p.props && p.props.path) || (typeof p.type === 'function' && p.type === Redirect)).map((P) => {
      if (P.type !== Route || P.type !== Redirect) {
        if (P.type.name === 'AsyncContent') {
          return (
            <Route
              modal={P.props.modal}
              key={P.props.path}
              path={P.props.path}
              exact={P.props.exact}
              component={AsyncComponent(() => import(P.props.component))}
            />
          );
        }
        return (
          <Route
            modal={P.props.modal}
            key={P.props.path}
            path={P.props.path}
            exact={P.props.exact}
            render={props => React.cloneElement(P, { key: P.props.key ? P.props.key : P.props.path, ...props })}
          />
        );
      }
      return P;
    });
    const nonModalRoutes = routes.filter(p => !p.props.modal);
    const modalRoutes = routes.filter(p => p.props.modal);
    // debugger;
    const sidebar = content.filter(p => typeof p.type === 'function' && (p.type.name === 'Sidebar' || (p.type.default && p.type.default.name === 'Sidebar')))[0];
    const footer = content.filter(p => typeof p.type === 'function' && p.type.name === 'Footer')[0];
    // const bodyOptions = ['sidebar-mini, login-page', 'layout-top-nav', 'layout-boxed'
    // , 'fixed sidebar-mini', 'sidebar-mini-expand-feature', 'sidebar-collapse'
    // , 'hold-transition', 'login-page']
    return (
      <Router>
        <div className="wrapper">
          <header className="main-header">
            <a href="index2.html" className="logo">
              <span className="logo-mini">
                <b>{titleShortBold}</b>
                {titleShotThin}
              </span>
              <span className="logo-lg">
                <b>{titleBold}</b>
                {titlethin}
              </span>
            </a>
            <nav className="navbar navbar-static-top">
              <div className="sidebar-toggle" data-toggle="push-menu" role="button">
                <FontAwesomeIcon icon={['fas', 'bars']} />
                <span className="sr-only">Toggle navigation</span>
              </div>
              <div className="navbar-custom-menu">
                {menu}
              </div>
            </nav>
          </header>
          {sidebar}
          <Switch>
            {modalRoutes}
          </Switch>
          <div className="content-wrapper">
            <Switch>
              {nonModalRoutes}
            </Switch>
          </div>
          {footer}
          <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
          <script src="bower_components/jquery-slimscroll/jquery.slimscroll.min.js" />
        </div>
      </Router>
    );
  }
}

Core.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  titleShort: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  theme: PropTypes.oneOf(Themes),
  browserTitle: PropTypes.string,
};

Core.defaultProps = {
  children: null,
  title: ['Admin', 'LTE'],
  titleShort: ['A', 'LT'],
  browserTitle: 'Untitled',
  theme: 'blue',
};

export default Core;

export {
  Core, Sidebar, Content, Footer, ControlSidebar, Navbar, Row, Col, Infobox, Box
  , DescriptionBlock, ProgressGroup, Button, DataTable, Checkbox, Tabs
  , TabContent, Description, DescriptionItem, ButtonGroup, Margin, SparklineBox, Chatbox
  , Memberbox, SimpleTable, Sparkbar, NavListItem, NavList, ProductList, ProductListItem
  , Infobox2, LoginCore, AsyncComponent, Alert, Callout, ProgressBar
  , Divider, Inputs
  , Colors, Types, Sizes, Themes, FormTypes
  , Badge, Label, Calendar,
};
