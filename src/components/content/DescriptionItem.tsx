import React, { CSSProperties, ReactNode } from 'react';

interface DescriptionItemProps {
  text?: ReactNode,
  label?: ReactNode,
  noText?: boolean,
}

type DescriptionItemComponent = React.FC<DescriptionItemProps>;

const DescriptionItem: DescriptionItemComponent = ({ text, label, noText }: DescriptionItemProps) => {
  const style: CSSProperties = noText || !text ? { textAlign: 'center', width: '100%' } : {};
  return (
    <>
      <dt style={style}>{label}</dt>
      {!noText ? <dd>{text}</dd> : null}
    </>
  );
};

DescriptionItem.defaultProps = {
  text: null,
  label: null,
  noText: false,
};

export default DescriptionItem;
