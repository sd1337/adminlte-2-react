/* eslint-disable no-alert, jsx-a11y/no-noninteractive-element-interactions */
import React, { MouseEventHandler, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Entry.css';
import { Types } from '../PropTypes';
import { splitIcon } from '../Utilities';

interface EntryProps {
  icon?: string,
  labelType?: Types,
  labelValue?: number,
  headerText?: string,
  footerText?: string,
  onFooterClick?: MouseEventHandler<HTMLLIElement>,
  className?: string,
  children?: ReactNode,
  onClick?: MouseEventHandler<HTMLLIElement>,
}

type EntryComponent = React.FC<EntryProps>;

const Entry: EntryComponent = ({
  icon, labelType, labelValue = 0, headerText, footerText, onFooterClick,
  className, children, onClick,
}: EntryProps) => {
  const hasIcon = !!(icon);
  const localIcon = hasIcon ? splitIcon(icon) : null;
  /* eslint-disable-next-line no-nested-ternary, no-param-reassign */
  labelValue = labelValue || (children ? ((children as ReactNode[]).length || 1) : 0);
  /* eslint-disable-next-line no-param-reassign */
  headerText = headerText ? headerText.replace('#value#', labelValue.toString()) : undefined;

  const hasChildren = !!(children);

  const listClasses = [
    'navbar-menu',
    hasChildren ? 'dropdown' : null,
    className,
  ].filter((p) => p).join(' ');

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li className={listClasses} onClick={onClick}>
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <FontAwesomeIcon icon={localIcon as IconProp} />
        {labelValue > 0 && <span className={`label label-${labelType}`}>{labelValue}</span>}
      </a>
      {hasChildren && (
        <ul className="dropdown-menu">
          {headerText && <li className="header">{headerText}</li>}
          <li>
            <ul className="menu">{children}</ul>
          </li>
          {footerText && <li onClick={onFooterClick} onKeyPress={onFooterClick as any} className="footer"><div>{footerText}</div></li>}
        </ul>
      )}
    </li>
  );
};

Entry.defaultProps = {
  icon: undefined,
  labelType: 'success',
  labelValue: 0,
  headerText: undefined,
  footerText: undefined,
  onFooterClick: undefined,
  className: undefined,
  onClick: undefined,
  children: undefined,
};

export default Entry;
