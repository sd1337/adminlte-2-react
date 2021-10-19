import React, { ReactNode } from 'react';
import { Colors } from '../PropTypes';

type BoxPaneComponent = React.FC<BoxPaneProps>;

interface BoxPaneProps {
  children: ReactNode,
  color: Colors,
  side?: string,
  padding?: boolean,
}

const BoxPane: BoxPaneComponent = ({
  padding, color, children, side,
}: BoxPaneProps) => (
  <div className={`${padding ? 'pad' : ''} box-pane-${side} bg-${color}`}>
    {children}
  </div>
);

BoxPane.defaultProps = {
  side: 'right',
  padding: false,
};

export default BoxPane;
