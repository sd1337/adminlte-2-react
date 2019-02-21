/* eslint-disable no-alert, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Types } from '../PropTypes';
import { splitIcon } from '../Utilities';

const MenuEntry = ({
  icon, labelType, labelValue, headerText, footerText, onFooterClick,
  entryClass, footerLink, children, onClick,
}) => {
  const hasIcon = !!(icon);
  const localIcon = hasIcon ? splitIcon(icon) : null;
  /* eslint-disable-next-line no-nested-ternary, no-param-reassign */
  labelValue = children ? (children.length ? children.length : 1) : labelValue;
  /* eslint-disable-next-line no-param-reassign */
  headerText = headerText ? headerText.replace('#value#', labelValue) : null;

  const hasChildren = !!(children);

  const listClasses = [
    hasChildren ? 'dropdown' : null,
    entryClass,
  ].filter(p => p).join(' ');

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li className={listClasses} onClick={onClick}>
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <FontAwesomeIcon icon={localIcon} />
        {labelValue && <span className={`label label-${labelType}`}>{labelValue}</span>}
      </a>
      {hasChildren && (
        <ul className="dropdown-menu">
          {headerText && <li className="header">{headerText}</li>}
          <li>
            <ul className="menu">{children}</ul>
          </li>
          {footerText && <li onClick={onFooterClick} onKeyPress={onFooterClick} className="footer"><a href={footerLink}>{footerText}</a></li>}
        </ul>
      )}
    </li>
  );
};

MenuEntry.propTypes = {
  icon: PropTypes.string,
  labelType: PropTypes.oneOf(Types),
  labelValue: PropTypes.number,
  headerText: PropTypes.string,
  footerText: PropTypes.string,
  onFooterClick: PropTypes.func,
  entryClass: PropTypes.string,
  footerLink: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

MenuEntry.defaultProps = {
  icon: null,
  labelType: 'success',
  children: null,
  labelValue: null,
  headerText: null,
  footerText: null,
  onFooterClick: null,
  entryClass: null,
  footerLink: null,
  onClick: null,
};

export default MenuEntry;
