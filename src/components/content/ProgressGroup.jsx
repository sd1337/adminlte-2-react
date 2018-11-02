import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../PropTypes';

const ProgressGroup = ({
  currentValue, maxValue, color, text,
}) => (
  <div className="progress-group">
    <span className="progress-text">{text}</span>
    <span className="progress-number">
      <b>{currentValue}</b>
        /
      {maxValue}
    </span>

    <div className="progress sm">
      <div className={`progress-bar progress-bar-${color}`} style={{ width: `${currentValue / maxValue * 100}%` }} />
    </div>
  </div>);

ProgressGroup.propTypes = {
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  color: PropTypes.oneOf(Colors).isRequired,
  text: PropTypes.string,
};

ProgressGroup.defaultProps = {
  text: null,
};


export default ProgressGroup;
