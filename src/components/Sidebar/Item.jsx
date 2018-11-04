import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import uuidv4 from 'uuid';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Colors } from '../PropTypes';

const Item = ({
  iconClass, link, text, labels, color, history, children, isSubItem,
}) => {
  const active = history.location.pathname === link;
  const mappedLabels = labels.map(p => (p.small ? <small key={uuidv4()} className={`label pull-right bg-${p.color}`}>{p.text}</small> : <span key={uuidv4()} className={`label label-${p.type} pull-right`}>{p.text}</span>));
  const hasColor = !!(color);

  const hasChildren = !!(children);
  if (isSubItem) {
    return (
      <li className={`${active && 'active'} ${hasChildren && 'treeview'}`}>
        <Link to={link}>
          <i className={`fa ${iconClass}`} />
          {' '}
          {text}
          {hasChildren && (
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          )}
        </Link>
        {hasChildren && (
          <ul className="treeview-menu">
            {children}
          </ul>
        )}
      </li>);
  }


  if (hasChildren) {
    /* eslint-disable-next-line no-param-reassign */
    if (!children.length) { children = [children]; }
    /* eslint-disable-next-line no-param-reassign */
    children = children.map(p => React.cloneElement(p, { isSubItem: true }));
    const activeChild = !!(children.find(p => p.props.link === history.location.pathname));
    return (
      <li className={`${active ? 'active ' : ''}treeview${activeChild ? ' menu-open' : ''}`}>
        <Link to={link}>
          <i className={`fa ${iconClass} ${hasColor && `text-${color}`}`} />
          {' '}
          <span>{text}</span>
          <span className="pull-right-container">
            {<i className="fa fa-angle-left pull-right" />}
            {mappedLabels}
          </span>
        </Link>
        <ul className="treeview-menu" style={{ display: activeChild ? 'block' : 'none' }}>
          {children}
        </ul>
      </li>);
  }
  return (
    <li className={`${active ? 'active ' : ''}treeview${active ? ' menu-open' : ''}`}>
      <Link to={link}>
        <i className={`fa ${iconClass} ${hasColor && `text-${color}`}`} />
        {' '}
        <span>{text}</span>
        <span className="pull-right-container">
          {mappedLabels}
        </span>
      </Link>
    </li>
  );
};

Item.propTypes = {
  children(props, propName, componentName) {
    const prop = props[propName];
    let error;
    React.Children.forEach(prop, (el) => {
      if (error) return;
      if (el.displayName !== 'withRouter(Item)') {
        error = new Error(
          `\`${componentName}\` only accepts \`Item's\`.`,
        );
      }
    });
    return error;
  },
  iconClass: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.shape({
  })),
  color: PropTypes.oneOf(Colors),
  history: ReactRouterPropTypes.history,
  isSubItem: PropTypes.bool,
};

Item.defaultProps = {
  children: null,
  iconClass: 'fa-circle-o',
  link: '#',
  labels: [],
  color: null,
  history: null,
  isSubItem: false,
};
export default withRouter(Item);
