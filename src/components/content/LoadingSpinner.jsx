import React from 'react';
import PropTypes from 'prop-types';

import './LoadingSpinner.css';

const LoadingSpinner = ({ icon, size }) => (
  <div className="overlay">
    <i style={{ fontSize: size }} className={`fa ${icon} fa-spin`} />
  </div>
);

LoadingSpinner.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};
LoadingSpinner.defaultProps = {
  icon: 'fa-refresh',
  size: '30px',
};

export default LoadingSpinner;
