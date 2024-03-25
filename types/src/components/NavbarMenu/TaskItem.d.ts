import React, { MouseEventHandler } from 'react';
import './TaskItem.css';
import { Colors } from '../PropTypes';
interface TaskItemProps {
    value: number;
    barColor: Colors;
    text: string;
    to?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    min?: number;
    max?: number;
}
type TaskItemComponent = React.FC<TaskItemProps>;
declare const TaskItem: TaskItemComponent;
export default TaskItem;
//# sourceMappingURL=TaskItem.d.ts.map