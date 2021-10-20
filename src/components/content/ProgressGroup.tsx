import React from 'react';
import { Colors } from '../PropTypes';

interface ProgressGroupProps {
  currentValue: number,
  maxValue: number,
  color: Colors,
  text?: string,
}

type ProgressGroupComponent = React.FC<ProgressGroupProps>;

const ProgressGroup:ProgressGroupComponent = ({
  currentValue, maxValue, color, text,
}: ProgressGroupProps) => (
  <div className="progress-group">
    <span className="progress-text">{text}</span>
    <span className="progress-number">
      <b>{currentValue}</b>
      /
      {maxValue}
    </span>

    <div className="progress sm">
      <div className={`progress-bar progress-bar-${color}`} style={{ width: `${(currentValue / maxValue) * 100}%` }} />
    </div>
  </div>
);

ProgressGroup.defaultProps = {
  text: undefined,
};

export default ProgressGroup;
