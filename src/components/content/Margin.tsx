import React, { ReactNode } from 'react';

interface MarginProps {
  /* TODO: make children prop more specific */
  children: ReactNode,
  pullRight?: boolean
}

type MarginComponent = React.FC<MarginProps>;

const Margin: MarginComponent = ({ pullRight, children }: MarginProps) => (<div className={`margin${pullRight ? ' pull-right' : ''}`}>{children}</div>);

Margin.defaultProps = {
  pullRight: false,
};

export default Margin;
