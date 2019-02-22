import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './TaskItem.css';
import { Colors } from '../PropTypes';

const TaskItem = ({
  value, barColor, text, to, onClick, min, max,
}) => {
  const content = (
    <React.Fragment>
      <h3>
        {text}
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
    </React.Fragment>
  );
  return (
    <li className="task-item">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      {to ? (<Link href={to}>{content}</Link>) : (<div onClick={onClick}>{content}</div>)}
    </li>
  );
};

TaskItem.propTypes = {
  value: PropTypes.number.isRequired,
  barColor: PropTypes.oneOf(Colors).isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

TaskItem.defaultProps = {
  min: 0,
  max: 100,
  to: undefined,
  onClick: undefined,
};

export default TaskItem;
