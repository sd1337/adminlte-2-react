import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingOverlay = ({ icon, spin }) => (
  <div className="overlay">
    <FontAwesomeIcon icon={icon} spin={spin} />
  </div>
);

LoadingOverlay.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string),
  spin: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
  icon: ['fas', 'sync'],
  spin: true,
};

export default LoadingOverlay;
