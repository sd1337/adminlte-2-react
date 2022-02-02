/* eslint-disable import/first */
/* eslint-disable global-require */
import React, { Component, ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import jQuery from 'jquery';

import '../css/bootstrap.min.css';
import 'source-sans-pro/source-sans-pro.css';
import '../adminlte/css/AdminLTE.css';

import 'bootstrap';
import '../adminlte/js/adminlte';
import 'jquery-sparkline';

import * as Sidebar from './Sidebar/Sidebar';
import Content from './Content';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';
import * as Navbar from './NavbarMenu/Navbar';
import Row from './content/Row';
import Col from './content/Col';
import Infobox from './content/Infobox';
import Box from './content/Box';
import DescriptionBlock from './content/DescriptionBlock';
import ProgressGroup from './content/ProgressGroup';
import Button from './content/Button';
import ButtonGroup from './content/ButtonGroup';
import DataTable from './content/DataTable';
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
  Colors as Colors_, Types as Types_, Sizes as Sizes_, FormTypes as FormTypes_, Themes as Themes_,
} from './PropTypes';
import Badge from './content/Badge';
import Calendar from './content/Calendar';
import LoadingSpinner from './content/LoadingSpinner';
import AsyncContent from './content/AsyncContent';
import BoxPane from './content/BoxPane';
import ButtonToolbar from './content/ButtonToolbar';
import Label from './content/Label';
import Pagination from './content/Pagination';
import SmartTable from './content/SmartTable';

library.add(fab, fas, far);

type Node = React.ReactNode;

type Props = {
  children: ReactElement | ReactElement[];
  title:string | string[];
  titleShort: string | string[];
  theme: Themes;
  browserTitle: string;
  sidebar: Node;
  footer: Node;
  homeTo: string;
  searchbarFilter: boolean;
};

class AdminLTE extends Component<Props, {}> {
  static defaultProps = {
    children: null,
    title: ['Admin', 'LTE'],
    titleShort: ['A', 'LT'],
    browserTitle: null,
    theme: 'blue',
    //  controlSidebar: null,
    footer: null,
    sidebar: undefined,
    homeTo: '/',
    searchbarFilter: false,
  };

  componentDidMount() {
    const { theme = 'blue', browserTitle } = this.props;
    if (theme) {
      document.body.className += ` skin-${theme} sidebar-mini`;
    }
    if (browserTitle) document.title = browserTitle;
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
    const docReady = (jQuery as any).isReady;
    if (docReady) {
      (jQuery('body') as any).layout();
    } else {
      jQuery(document).ready(() => {
        (jQuery('body') as any).layout();
      });
    }
  }

  render() {
    const { title, titleShort } = this.props;
    let { children } = this.props;
    const { searchbarFilter } = this.props;
    const { homeTo } = this.props;
    let childrenArray:ReactElement[] = [];
    {
      if (!children) children = [<div>No content</div>];
      if (!(children as []).length) {
        children = [children] as ReactElement[];
        childrenArray = children;
      } else {
        childrenArray = children as ReactElement [];
      }
      let temp = childrenArray.filter(
        (p) => Object.prototype.toString.call(p) !== '[object Array]',
      );
      childrenArray
        .filter((p) => Object.prototype.toString.call(p) === '[object Array]')
        .forEach((p) => {
          temp = temp.concat(p);
        });
    }
    let titleArray:string[] = [];
    if (!title.length) {
      titleArray = [title as string];
    } else {
      titleArray = title as string[];
    }
    const [titleBold, titlethin = ''] = titleArray;
    let titleShortArray:string[] = [];
    if (!titleShort.length) {
      titleShortArray = [titleShort as string];
    }
    const [titleShortBold, titleShotThin = ''] = titleShortArray;
    let menu:React.ReactNode;
    if (childrenArray
      && childrenArray.length) {
      const optionalMenu = childrenArray.filter((p) => p.type === Navbar.Core);
      if (optionalMenu.length > 0) {
        [menu] = optionalMenu;
      }
    }
    if (childrenArray.findIndex((p: React.ReactElement) => p.type === ControlSidebar) > 0) {
      menu = React.cloneElement(menu as React.ReactElement, {
        additionalMenus: [
          React.createElement(Navbar.ControlSidebarEntry, {
            key: 'control-sidebar-entry',
          }),
        ],
      });
    }
    const content = childrenArray.filter((p) => p !== menu).reduce((init: React.ReactElement[], p: React.ReactElement | React.ReactElement[]) => {
      if (Array.isArray(p)) {
        // eslint-disable-next-line no-param-reassign
        init = init.concat(p as any);
      } else {
        init.push(p);
      }
      return init;
    }, []);
    const nonModalRoutes: Route[] = [];
    const modalRoutes: Route[] = [];
    content
      .filter(
        (p: React.ReactElement) => (p.props && p.props.path)
          || (p.type === Redirect),
      )
      .forEach((p: any) => {
        let route: any = p as Route;
        if (p.type !== Route && p.type !== Redirect) {
          if (p.type === AsyncContent) {
            route = (
              <Route
                // modal={p.props.modal}
                key={p.props.path}
                path={p.props.path}
                exact={p.props.exact}
                component={AsyncComponent(() => import(p.props.component))}
              />
            );
          } else {
            route = (
              <Route
              // modal={p.props.modal}
                key={p.props.path}
                path={p.props.path}
                exact={p.props.exact}
                render={(props) => React.cloneElement(p, {
                  key: p.props.key ? p.props.key : p.props.path,
                  ...props,
                })}
              />
            );
          }
        }
        if (p.props.modal) {
          modalRoutes.push(route);
        } else {
          nonModalRoutes.push(route);
        }
      });

    const childSidebar = content.find((p: React.ReactElement) => p.type === Sidebar.Core);
    const childFooter = content.find((p: React.ReactElement) => p.type === Footer);
    const {
      sidebar: propSidebar,
      // controlSidebar,
      footer: propFooter,
    } = this.props;

    if (childSidebar && propSidebar) {
      // eslint-disable-next-line no-console
      console.error('Pass sidebar either as prop or child but not both');
    }

    if (childFooter && propFooter) {
      // eslint-disable-next-line no-console
      console.error('Pass footer either as prop or child but not both');
    }
    const sidebar = childSidebar || (
      <Sidebar.Core searchbarFilter={searchbarFilter}>
        {propSidebar}
      </Sidebar.Core>
    );
    const footer = childFooter || propFooter;

    return (
      <Router>
        <div className="wrapper">
          <header className="main-header">
            <Link className="logo" to={homeTo}>
              <span className="logo-mini">
                <b>{titleShortBold}</b>
                {titleShotThin}
              </span>
              <span className="logo-lg">
                <b>
                  {titleBold}
                </b>
                {titlethin}
              </span>
            </Link>
            <nav className="navbar navbar-static-top">
              <div
                className="sidebar-toggle"
                data-toggle="push-menu"
                role="button"
              >
                <FontAwesomeIcon icon={['fas', 'bars']} />
                <span className="sr-only">Toggle navigation</span>
              </div>
              <div className="navbar-custom-menu">{menu}</div>
            </nav>
          </header>
          {sidebar}
          <Switch>{modalRoutes}</Switch>
          <div className="content-wrapper">
            <Switch>{nonModalRoutes}</Switch>
          </div>
          {footer}
        </div>
      </Router>
    );
  }
}

export default AdminLTE;

export type Colors = Colors_;
export type Types = Types_;
export type Sizes = Sizes_;
export type FormTypes = FormTypes_;
export type Themes = Themes_;

export {
  Content,
  Sidebar,
  Footer,
  ControlSidebar,
  Navbar,
  Row,
  Col,
  Infobox,
  Box,
  DescriptionBlock,
  ProgressGroup,
  Button,
  DataTable,
  Tabs,
  TabContent,
  Description,
  DescriptionItem,
  ButtonGroup,
  Margin,
  SparklineBox,
  Chatbox,
  Memberbox,
  SimpleTable,
  Sparkbar,
  NavListItem,
  NavList,
  ProductList,
  ProductListItem,
  Infobox2,
  LoginCore,
  AsyncComponent,
  Alert,
  Callout,
  ProgressBar,
  Divider,
  Inputs,
  Label,
  Badge,
  Calendar,
  LoadingSpinner,
  BoxPane,
  ButtonToolbar,
  Pagination,
  SmartTable,
};
