import React from 'react';
import PropTypes from 'prop-types';

const DescriptionItem = ({ text, label, noText }) => {
  const style = noText || !text ? { textAlign: 'center', width: '100%' } : null;
  return (
    <React.Fragment>
      <dt style={style}>{label}</dt>
      {!noText ? <dd>{text}</dd> : null}
    </React.Fragment>
  );
};

DescriptionItem.propTypes = {
  text: PropTypes.node,
  label: PropTypes.node,
  noText: PropTypes.bool,
};

DescriptionItem.defaultProps = {
  text: null,
  label: null,
  noText: false,
};

export default DescriptionItem;
