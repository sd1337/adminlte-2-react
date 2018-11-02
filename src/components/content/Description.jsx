import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ horizontal, children }) => (
  <dl className={horizontal ? 'dl-horizontal' : ''}>
    {children}
  </dl>
);

Description.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Description.defaultProps = {
  horizontal: false,
};

export default Description;
