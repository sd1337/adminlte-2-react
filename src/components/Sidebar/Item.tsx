import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors, TypeMappings, Types } from '../PropTypes';
import { splitIcon } from '../Utilities';

const isActiveItem = ({ link, activeOn, history }: { link?: string, activeOn?: string | string[], history: any }) => {
  const { location } = history || {};
  const { pathname } = location || { pathname: '' };
  let activeArray: string[] = [];
  if (activeOn) {
    activeArray = (activeOn.length && typeof activeOn !== 'string' ? activeOn : [activeOn]) as string[];
  }
  const active = pathname === link || !!(activeArray.find((p: string) => pathname.match(new RegExp(p))));
  return active;
};

type ItemComponent = React.FC<ItemProps>;

interface ItemLabel {
  small: boolean,
  color: Colors,
  text: string,
  type: Types,
}

interface ItemProps extends RouteComponentProps {
  id?: string,
  children?: ItemComponent,
  icon?: string,
  text: string,
  labels?: ItemLabel | ItemLabel[],
  color?: Colors,
  activeOn?: string | string[],
  to?: string,
  highlighted?: boolean,
}

const Item: ItemComponent = ({
  id, icon = 'far-circle', text, labels, color, history, children, activeOn, to, highlighted = false,
}: ItemProps) => {
  const localTo = to;
  const active = isActiveItem({ link: localTo, activeOn, history });
  let localLabels: ItemLabel[];
  if (labels) {
    if (Array.isArray(labels)) {
      localLabels = labels;
    } else {
      localLabels = [labels];
    }
  } else {
    localLabels = [];
  }
  const mappedLabels = localLabels
    .map((p) => (p.small ? <small key={uuidv4()} className={`label pull-right bg-${p.color}`}>{p.text}</small>
      : <span key={uuidv4()} className={`label label-${p.type} pull-right`}>{p.text}</span>));
  const localColor = color ? TypeMappings.byColor[color].colorCode : '#d2d6de';
  const localIcon = splitIcon(icon);

  const hasChildren = !!(children);
  const hasLabels = Array.isArray(localLabels);
  let localChildren: ItemComponent[];
  let activeChild = false;
  if (hasChildren) {
    if (!Array.isArray(children)) {
      localChildren = [children];
    } else {
      localChildren = children;
    }
    localChildren = localChildren.filter(p => p && p instanceof Component).map((p: any) => React.cloneElement(p as any, { key: p.props.to })) as any;
    activeChild = !!(localChildren.find((p: any) => isActiveItem({
      history,
      link: p.props.to || p.props.link,
      ...p.props,
    })));
  }
  let actualComponent = (
    <>
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
    </>
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
  ].filter((p) => p).join(' ');
  return (
    <li className={liClasses} id={id}>
      {actualComponent}
      {hasChildren && (
        <ul className="treeview-menu" style={{ display: activeChild ? 'block' : 'none' }}>
          {children}
        </ul>
      )}
    </li>
  );
};

Item.defaultProps = {
  id: undefined,
  children: undefined,
  icon: 'far-circle',
  labels: undefined,
  color: undefined,
  activeOn: undefined,
  to: undefined,
  highlighted: false,
};

export default withRouter(Item);
