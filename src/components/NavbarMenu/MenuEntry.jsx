/* eslint-disable no-alert, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';

const MenuEntry = ({
  iconClass, labelClass, value, headerText, footerText, footerAction,
  entryClass, footerLink, children,
}) => {
  /* eslint-disable-next-line no-nested-ternary, no-param-reassign */
  value = children ? children.length ? children.length : 1 : 0;
  /* eslint-disable-next-line no-param-reassign */
  headerText = headerText.replace('#value#', value);
  return (
    <li className={`dropdown ${entryClass}`}>
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <i className={`fa ${iconClass}`} />
        {
          value > 0 && <span className={`label label-${labelClass}`}>{value}</span>
        }

      </a>
      <ul className="dropdown-menu">
        <li className="header">{headerText}</li>
        <li>
          <ul className="menu">{children || <li> Nothing to see here</li>}</ul>
        </li>
        {footerText && <li onClick={footerAction} onKeyPress={footerAction} className="footer"><a href={footerLink}>{footerText}</a></li>}
      </ul>
    </li>
  );
};

MenuEntry.propTypes = {
  iconClass: PropTypes.string,
  labelClass: PropTypes.oneOf(Types),
  value: PropTypes.number,
  headerText: PropTypes.string,
  footerText: PropTypes.string,
  footerAction: PropTypes.func,
  entryClass: PropTypes.string,
  footerLink: PropTypes.string,
  /* TODO: make children prop more specific */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MenuEntry.defaultProps = {
  iconClass: null,
  labelClass: 'success',
  children: null,
  value: null,
  headerText: null,
  footerText: null,
  footerAction: null,
  entryClass: null,
  footerLink: null,
};

export default MenuEntry;
