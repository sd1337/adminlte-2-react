import React from 'react';
import PropTypes from 'prop-types';

const NavList = ({ children, pills, stacked }) => {
  const classes = ['nav',
    pills ? 'nav-pills' : '',
    stacked ? 'nav-stacked' : '',
  ].join(' ');
  return (
    <ul className={classes}>
      {children}
    </ul>
  );
};

NavList.propTypes = {
  /* TODO: make children prop more specific */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pills: PropTypes.bool,
  stacked: PropTypes.bool,
};

NavList.defaultProps = {
  pills: false,
  stacked: false,
};

export default NavList;
