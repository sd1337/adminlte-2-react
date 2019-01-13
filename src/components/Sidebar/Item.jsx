import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import uuidv4 from 'uuid';
import ReactRouterPropTypes from 'react-router-prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors, TypeMappings } from '../PropTypes';
import { splitIcon } from '../Utilities';

const isActiveItem = ({ link, activeOn, history }) => {
  const { location } = history || {};
  const { pathname } = location || { pathname: "" };
  let activeArray = [];
  if (activeOn) {
    activeArray = activeOn.length && typeof activeOn !== "string" ? activeOn : [activeOn];
  }
  const active = pathname === link || !!(activeArray.find(p => pathname.match(new RegExp(p))));
  return active;
}

const Item = ({
  icon, link, text, labels, color, history, children, isSubItem, activeOn, to
}) => {
  const localTo = to || link;
  const active = isActiveItem({ localTo, activeOn, history });
  const localLabels = labels && labels.length ? labels : (labels && [labels]) || [];
  const mappedLabels = localLabels.map(p => (p.small ? <small key={uuidv4()} className={`label pull-right bg-${p.color}`}>{p.text}</small> : <span key={uuidv4()} className={`label label-${p.type} pull-right`}>{p.text}</span>));
  const localColor = color ? TypeMappings.byColor[color].colorCode : null;
  const localIcon = splitIcon(icon);

  const hasChildren = !!(children);
  if (isSubItem) {
    return (
      <li className={`${active && 'active'} ${hasChildren && 'treeview'}`}>
        <Link to={localTo}>
          <FontAwesomeIcon color={localColor} icon={localIcon} style={{ marginRight: '8px' }} />
          {' '}
          {text}
          {hasChildren && (
            <span className="pull-right-container">
              <FontAwesomeIcon className="pull-right" icon="angle-left" />
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
    const activeChild = !!(children.find(p => isActiveItem({ history, ...p.props })));
    return (
      <li className={`${active ? 'active ' : ''}treeview${activeChild ? ' menu-open' : ''}`}>
        <Link to={localTo}>
          <FontAwesomeIcon
            color={localColor}
            icon={localIcon}
            style={{ marginRight: '6px' }}
          />
          {' '}
          <span>{text}</span>
          <span className="pull-right-container">
            {<FontAwesomeIcon className="pull-right" icon="angle-left" />}
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
      <Link to={localTo}>
        <FontAwesomeIcon
          color={localColor}
          icon={localIcon}
          style={{ marginRight: '6px' }}
        />
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node,),
  ]),
  icon: PropTypes.string,
  link: function(props, propName) {
    const prop = props[propName];
    return new Error("This prop is deprecated and will be removed in future releases, please use the prop \"to\" instead");
  },
  text: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.shape({
  })),
  color: PropTypes.oneOf(Colors),
  history: ReactRouterPropTypes.history,
  isSubItem: PropTypes.bool,
  activeOn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  to: PropTypes.string.isRequired,
};

Item.defaultProps = {
  children: null,
  icon: 'far-circle',
  link: '#',
  labels: null,
  color: null,
  history: null,
  isSubItem: false,
  activeOn: null,
};
export default withRouter(Item);
