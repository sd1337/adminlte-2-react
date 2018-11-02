import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({
  pullRight, margin, vertical, children,
}) => {
  const classNames = [
    vertical ? 'btn-group-vertical' : 'btn-group',
    pullRight ? 'pull-right' : null,
    margin ? 'margin' : null,
  ].filter(p => p).join(' ');
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  pullRight: PropTypes.bool,
  margin: PropTypes.bool,
  vertical: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ButtonGroup.defaultProps = {
  pullRight: false,
  margin: false,
  vertical: false,
};


export default ButtonGroup;
