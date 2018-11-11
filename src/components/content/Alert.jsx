import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Types } from '../PropTypes';
import './Alert.css';


const Alert = ({
  closable, type, icon, title, children,
}) => {
  const className = [
    'alert',
    type ? `alert-${type}` : '',
    closable ? 'alert-dismissible' : '',
  ].join(' ');
  return (
    <div className={className}>
      {closable && <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>}
      {(icon || title) && (
        <h4>
          {icon && <FontAwesomeIcon className="icon" icon={icon.match(/^([fab|fas|far]*)-?(.+)/).splice(1, 2).filter(p => p.length > 0)} size="18px" />}
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
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Alert.defaultProps = {
  closable: false,
  type: null,
  icon: null,
  title: null,
  children: null,
};

export default Alert;
