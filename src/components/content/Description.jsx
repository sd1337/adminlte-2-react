import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ id, horizontal, children }) => (
  <dl id={id} className={horizontal ? 'dl-horizontal' : ''}>
    {children}
  </dl>
);

Description.propTypes = {
  id: PropTypes.string,
  horizontal: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Description.defaultProps = {
  id: undefined,
  horizontal: false,
};

export default Description;
