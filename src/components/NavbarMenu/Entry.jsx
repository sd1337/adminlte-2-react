/* eslint-disable no-alert, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Entry.css';
import { Types } from '../PropTypes';
import { splitIcon } from '../Utilities';

const Entry = ({
  icon, labelType, labelValue, headerText, footerText, onFooterClick,
  className, children, onClick,
}) => {
  const hasIcon = !!(icon);
  const localIcon = hasIcon ? splitIcon(icon) : null;
  /* eslint-disable-next-line no-nested-ternary, no-param-reassign */
  labelValue = labelValue || (children ? (children.length ? children.length : 1) : 0);
  /* eslint-disable-next-line no-param-reassign */
  headerText = headerText ? headerText.replace('#value#', labelValue) : null;

  const hasChildren = !!(children);

  const listClasses = [
    'navbar-menu',
    hasChildren ? 'dropdown' : null,
    className,
  ].filter(p => p).join(' ');

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li className={listClasses} onClick={onClick}>
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <FontAwesomeIcon icon={localIcon} />
        {labelValue > 0 && <span className={`label label-${labelType}`}>{labelValue}</span>}
      </a>
      {hasChildren && (
        <ul className="dropdown-menu">
          {headerText && <li className="header">{headerText}</li>}
          <li>
            <ul className="menu">{children}</ul>
          </li>
          {footerText && <li onClick={onFooterClick} onKeyPress={onFooterClick} className="footer"><div>{footerText}</div></li>}
        </ul>
      )}
    </li>
  );
};

Entry.propTypes = {
  icon: PropTypes.string,
  labelType: PropTypes.oneOf(Types),
  labelValue: PropTypes.number,
  headerText: PropTypes.string,
  footerText: PropTypes.string,
  onFooterClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Entry.defaultProps = {
  icon: null,
  labelType: 'success',
  children: null,
  labelValue: null,
  headerText: null,
  footerText: null,
  onFooterClick: null,
  className: null,
  onClick: null,
};

export default Entry;
