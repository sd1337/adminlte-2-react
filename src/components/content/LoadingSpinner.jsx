import React from 'react';
import PropTypes from 'prop-types';

import './LoadingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { splitIcon } from '../Utilities';

const LoadingSpinner = ({ icon, size }) => (
  <div className="overlay">
    <FontAwesomeIcon spin icon={splitIcon(icon)} size={size}/>
  </div>
);

LoadingSpinner.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};
LoadingSpinner.defaultProps = {
  icon: 'fas-sync-alt',
  size: '3x',
};

export default LoadingSpinner;
