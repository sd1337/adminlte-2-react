import React, { ReactNode, ReactElement } from 'react';

import { Types } from '../PropTypes';

interface Props {
  id?: string,
  type: Types,
  pullRight?: boolean,
  children?: ReactNode,
}

function Label({
  id, type, pullRight, children,
}: Props): ReactElement {
  return (
    <span id={id} className={`label label-${type}${pullRight ? ' pull-right' : ''}`}>{children}</span>
  );
}

Label.defaultProps = {
  id: undefined,
  children: null,
  pullRight: false,
};

export default Label;
