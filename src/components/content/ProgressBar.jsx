import React from 'react';
import PropTypes from 'prop-types';

import { Types, Colors } from '../PropTypes';

const ProgressBar = ({
  type, color, striped, min, max, text, value, active, sm, xs, xxs, vertical,
}) => {
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

ProgressBar.propTypes = {
  type: PropTypes.oneOf(Types),
  color: PropTypes.oneOf(Colors),
  striped: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  text: PropTypes.string,
  value: PropTypes.number.isRequired,
  active: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  xxs: PropTypes.bool,
  vertical: PropTypes.bool,
};

ProgressBar.defaultProps = {
  type: 'primary',
  color: null,
  striped: false,
  min: 0,
  max: 100,
  text: null,
  active: false,
  sm: false,
  xs: false,
  xxs: false,
  vertical: false,
};

export default ProgressBar;
