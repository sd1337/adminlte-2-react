import React, { ReactNode } from 'react';

interface ButtonGroupProps {
  pullRight?: boolean,
  margin?: boolean,
  vertical?: boolean,
  children: ReactNode,
}

type ButtonGroupComponent = React.FC<ButtonGroupProps>;

const ButtonGroup: ButtonGroupComponent = ({
  pullRight, margin, vertical, children,
}: ButtonGroupProps) => {
  const classNames = [
    vertical ? 'btn-group-vertical' : 'btn-group',
    pullRight ? 'pull-right' : null,
    margin ? 'margin' : null,
  ].filter((p) => p).join(' ');
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  pullRight: false,
  margin: false,
  vertical: false,
};

export default ButtonGroup;
