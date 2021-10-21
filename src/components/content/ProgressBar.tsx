import React from 'react';

import { Types, Colors } from '../PropTypes';

interface ProgressBarProps {
  type?: Types,
  color?: Colors,
  striped?: boolean,
  min?: number,
  max?: number,
  text?: string,
  value: number,
  active?: boolean,
  sm?: boolean,
  xs?: boolean,
  xxs?: boolean,
  vertical?: boolean,
}

type ProgressBarComponent = React.FC<ProgressBarProps>;

const ProgressBar: ProgressBarComponent = ({
  type, color, striped, min, max, text, value, active, sm, xs, xxs, vertical,
}: ProgressBarProps) => {
  const className = [
    'progress-bar',
    `progress-bar-${type}`,
    color ? `progress-bar-${color}` : '',
    striped ? 'progress-bar-striped' : '',
  ].join(' ');
  const classNames2 = [
    'progress',
    sm ? 'progress-sm' : '',
    xs ? 'progress-xs' : '',
    xxs ? 'progress-xxs' : '',
    vertical ? 'vertical' : '',
    active ? 'active' : '',
  ].join(' ');
  return (
    <div className={classNames2}>
      <div className={className} role="progressbar" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max} style={{ width: `${vertical ? 100 : value}%`, height: `${vertical ? value : 100}%` }}>
        <span className="sr-only">{text}</span>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  type: 'primary',
  color: undefined,
  striped: false,
  min: 0,
  max: 100,
  text: undefined,
  active: false,
  sm: false,
  xs: false,
  xxs: false,
  vertical: false,
};

export default ProgressBar;
