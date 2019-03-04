import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { splitIcon } from '../Utilities';

const TabTitle = ({ title, titleLeft, icon }) => {
  const hasIcon = !!(icon);
  const localIcon = hasIcon ? splitIcon(icon) : null;
  const hasTitle = !!(title);
  const hasIconOrHeader = hasIcon || hasTitle;

  return hasIconOrHeader && (
  <li className={`header${titleLeft ? ' pull-left' : ''}`}>
    {hasIcon && <FontAwesomeIcon icon={localIcon} />}
    {hasTitle ? ` ${title}` : ''}
  </li>
  );
};

TabTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  titleLeft: PropTypes.bool,
};

TabTitle.defaultProps = {
  icon: undefined,
  title: undefined,
  titleLeft: false,
};

export default TabTitle;
