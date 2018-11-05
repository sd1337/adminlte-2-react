import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgressInfoBox = ({
  progress, progressText, color, icon, text, number,
}) => {
  const hasProgressText = !!(progressText);
  return (
    <div className={`info-box bg-${color}`}>
      <span className="info-box-icon"><i className={icon} /></span>

      <div className="info-box-content">
        <span className="info-box-text">{text}</span>
        <span className="info-box-number">{number}</span>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        {hasProgressText && (
          <span className="progress-description">
            {progressText}
          </span>
        )}
      </div>
    </div>
  );
};

ProgressInfoBox.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  number: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  progressText: PropTypes.string,
};

ProgressInfoBox.defaultProps = {
  text: null,
  progressText: null,
};

export default ProgressInfoBox;
x;
