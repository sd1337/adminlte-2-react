import React, { ReactNode } from 'react';

interface DescriptionProps {
  id?: string,
  horizontal?: boolean,
  children: ReactNode
}

type DescriptionComponent = React.FC<DescriptionProps>;

const Description: DescriptionComponent = ({ id, horizontal, children }: DescriptionProps) => (
  <dl id={id} className={horizontal ? 'dl-horizontal' : ''}>
    {children}
  </dl>
);

Description.defaultProps = {
  id: undefined,
  horizontal: false,
};

export default Description;
