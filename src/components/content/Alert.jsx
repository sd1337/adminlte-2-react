import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';


const Alert = ({
  closable, type, iconClass, title, children,
}) => {
  const className = [
    'alert',
    type ? `alert-${type}` : '',
    closable ? 'alert-dismissible' : '',
  ].join(' ');
  return (
    <div className={className}>
      {closable && <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>}
      {(iconClass || title) && (
        <h4>
          <i className={`icon fa ${iconClass}`} />
          {' '}
          <span>{title}</span>
        </h4>
      )}
      {children}
    </div>
  );
};

Alert.propTypes = {
  closable: PropTypes.bool,
  type: PropTypes.oneOf(Types),
  iconClass: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Alert.defaultProps = {
  closable: false,
  type: null,
  iconClass: null,
  title: null,
  children: null,
};

export default Alert;
