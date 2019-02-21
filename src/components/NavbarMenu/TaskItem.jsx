import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';

const TaskItem = ({
  value, barColor, children, to, min, max,
}) => (
  <li>
    <a href={to}>
      <h3>
        {children}
        <small className="pull-right">{`${value}%`}</small>
      </h3>
      <div className="progress xs">
        <div
          className={`progress-bar progress-bar-${barColor}`}
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          <span className="sr-only">{`${value}% Complete`}</span>
        </div>
      </div>
    </a>
  </li>
);

TaskItem.propTypes = {
  value: PropTypes.number.isRequired,
  barColor: PropTypes.oneOf(Colors),
  /* TODO: make children prop more specific */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

TaskItem.defaultProps = {
  barColor: null,
  children: null,
  min: 0,
  max: 100,
};

export default TaskItem;
