import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import './TaskItem.css';
import { Colors } from '../PropTypes';

interface TaskItemProps {
  value: number,
  barColor: Colors,
  text: string,
  to?: string,
  onClick?: MouseEventHandler<HTMLDivElement>
  min?: number,
  max?: number,
}

type TaskItemComponent = React.FC<TaskItemProps>;

const TaskItem: TaskItemComponent = ({
  value, barColor, text, to, onClick, min, max,
}: TaskItemProps) => {
  const content = (
    <>
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
    </>
  );
  return (
    <li className="task-item">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
      {to ? (<Link href={to} to={to}>{content}</Link>) : (<div onClick={onClick}>{content}</div>)}
    </li>
  );
};

TaskItem.defaultProps = {
  min: 0,
  max: 100,
  to: undefined,
  onClick: undefined,
};

export default TaskItem;
