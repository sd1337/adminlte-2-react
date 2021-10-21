import React, { ReactNode } from 'react';

import { Types } from '../PropTypes';

interface CalloutProps {
  id?: string,
  title?: string,
  children?: ReactNode,
  type?: Types,
}

type CalloutComponent = React.FC<CalloutProps>;

const Callout: CalloutComponent = ({
  id, title, children, type = 'default',
}: CalloutProps) => (
  <div id={id} className={`callout callout-${type}`}>
    <h4>{title}</h4>

    <p>{children}</p>
  </div>
);

Callout.defaultProps = {
  id: undefined,
  title: undefined,
  children: undefined,
  type: undefined,
};

export default Callout;
