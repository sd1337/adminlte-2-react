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
  const { pathname } = location || { pathname: '' };
  let activeArray = [];
  if (activeOn) {
    activeArray = activeOn.length && typeof activeOn !== 'string' ? activeOn : [activeOn];
  }
  const active = pathname === link || !!(activeArray.find(p => pathname.match(new RegExp(p))));
  return active;
};

const Item = ({
  id, icon, link, text, labels, color, history, children, activeOn, to, highlighted,
}) => {
  const localTo = to || link;
  const active = isActiveItem({ link: localTo, activeOn, history });
  const localLabels = labels && labels.length ? labels : (labels && [labels]) || [];
  const mappedLabels = localLabels.map(p => (p.small ? <small key={uuidv4()} className={`label pull-right bg-${p.color}`}>{p.text}</small> : <span key={uuidv4()} className={`label label-${p.type} pull-right`}>{p.text}</span>));
  const localColor = color ? TypeMappings.byColor[color].colorCode : null;
  const localIcon = splitIcon(icon);

  const hasChildren = !!(children);
  const hasLabels = Array.isArray(localLabels);
  let localChildren = children;
  let activeChild = false;
  if (hasChildren) {
    // eslint-disable-next-line no-param-reassign
    children = children.length ? children : [children];
    localChildren = children.map(p => React.cloneElement(p, { key: p.to }));
    activeChild = !!(localChildren.find(p => isActiveItem({
      history,
      link: p.props.to || p.props.link,
      ...p.props,
    })));
  }
  let actualComponent = (
    <React.Fragment>
      <FontAwesomeIcon
        color={localColor}
        icon={localIcon}
        style={{ marginRight: '6px' }}
      />
      {' '}
      <span>{text}</span>
      {(hasChildren || hasLabels) && (
        <span className="pull-right-container">
          {hasChildren && <FontAwesomeIcon className="pull-right" icon="angle-left" />}
          {hasLabels && mappedLabels}
        </span>
      )}
    </React.Fragment>
  );
  if (localTo) {
    actualComponent = (
      <Link to={localTo}>
        {actualComponent}
      </Link>
    );
  } else {
    actualComponent = (
      // eslint-disable-next-line no-script-url, jsx-a11y/anchor-is-valid
      <a href="#">
        {actualComponent}
      </a>
    );
  }
  const liClasses = [
    (active) ? 'active' : null,
    hasChildren ? 'treeview' : null,
    activeChild ? 'menu-open' : null,
    highlighted ? 'highlighted' : undefined,
  ].filter(p => p).join(' ');
  return (
    <li className={liClasses}>
      {actualComponent}
      {hasChildren && (
        <ul className="treeview-menu" style={{ display: activeChild ? 'block' : 'none' }}>
          {children}
        </ul>
      )}
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  icon: PropTypes.string,
  // eslint-disable-next-line consistent-return
  link(props, propName) {
    const prop = props[propName];
    if (prop) {
      return new Error('This prop is deprecated and will be removed in future releases, please use the prop "to" instead');
    }
  },
  text: PropTypes.string.isRequired,
  labels: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
    }),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.shape({
    })),
  ]),
  color: PropTypes.oneOf(Colors),
  history: ReactRouterPropTypes.history,
  activeOn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  to: PropTypes.string,
  highlighted: PropTypes.bool,
};

Item.defaultProps = {
  id: undefined,
  children: null,
  icon: 'far-circle',
  link: undefined,
  labels: null,
  color: null,
  history: null,
  activeOn: null,
  to: undefined,
  highlighted: false,
};
export default withRouter(Item);
