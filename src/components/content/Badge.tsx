import React from 'react';
import { Colors } from '../PropTypes';

interface BadgeProps {
  id?: string,
  color: Colors,
  text?: string
}

type BadgeComponent = React.FC<BadgeProps>;

const Badge: BadgeComponent = ({ color, text, id }: BadgeProps) => (
  <span id={id} className={`badge bg-${color}`}>{text}</span>
);

Badge.defaultProps = {
  id: undefined,
  text: undefined,
};

export default Badge;
