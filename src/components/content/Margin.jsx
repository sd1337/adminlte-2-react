import React from 'react';
import PropTypes from 'prop-types';

const Margin = ({ pullRight, children }) => (<div className={`margin${pullRight ? ' pull-right' : ''}`}>{children}</div>);

Margin.propTypes = {
  /* TODO: make children prop more specific */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pullRight: PropTypes.bool,
};

Margin.defaultProps = {
  pullRight: false,
};

export default Margin;
