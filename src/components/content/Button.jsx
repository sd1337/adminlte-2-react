import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { splitIcon } from '../Utilities';
import ButtonGroup from './ButtonGroup';
import './Button.css';

class Button extends Component {
  render() {
    const {
      id, size, type, block, icon, color, flat, text, alignRight, disabled,
      // eslint-disable-next-line react/prop-types, no-unused-vars
      margin, pullRight = alignRight, pullLeft, to, app, badge, badgeText, onClick, split,
      outline, className, value, name,
    } = this.props;
    let { children } = this.props;
    const buttonClasses = ['btn',
      block ? 'btn-block' : '',
      `btn-${type}`,
      flat ? 'btn-flat' : '',
      className,
      color ? `bg-${color}` : '',
      size ? `btn-${size}` : '',
      pullRight ? 'pull-right' : '',
      pullLeft ? 'pull-left' : '',
      disabled ? 'disabled' : '',
      margin ? 'margin' : '',
      flat ? 'btn-flat' : '',
      app ? 'btn-app' : '',
      outline ? 'btn-outline' : '',
    ].filter(p => p).join(' ');

    const hasIcon = !!(icon);
    const localIcon = hasIcon ? splitIcon(icon) : null;

    const button = (
      <button
        id={id || ''}
        onClick={disabled ? null : onClick}
        type="button"
        className={buttonClasses}
        value={value}
        name={name}
      //  style={{ marginRight: '0.2em' }}
      >
        {badge}
        {icon && <FontAwesomeIcon icon={localIcon} />}
        {icon && text ? ' ' : ''}
        {text || ''}
      </button>
    );

    if (to) {
      return (<Link to={to}>{button}</Link>);
    } if (children) {
      if (!children.length) { children = [children]; }
      if (children.length > 0) {
        children = children.map(p => (p.type !== 'li' && p.type.name !== 'Divider' ? (<li key={uuidv4()}>{p}</li>) : React.cloneElement(p, { key: uuidv4() })));
      } else {
        children = undefined;
      }
      if (split) {
        return (
          <ButtonGroup>
            {(text || icon || badge) && (
              <button
                onClick={disabled ? null : onClick}
                type="button"
                className={buttonClasses}
              >
                {badge}
                {icon && <FontAwesomeIcon icon={localIcon} />}
                {icon && text ? ' ' : ''}
                {text || ''}
              </button>
            )}
            <button
              id={id || ''}
              type="button"
              className={`${buttonClasses} dropdown-toggle`}
              data-toggle="dropdown"
            >
              <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              {children}
            </ul>
          </ButtonGroup>
        );
      }
      return (
        <React.Fragment>
          <button type="button" className={`${buttonClasses} dropdown-toggle`} data-toggle="dropdown">
            {`${text || ''} `}
            <FontAwesomeIcon icon={['fas', 'caret-down']} />
          </button>
          <ul className="dropdown-menu">
            {children}
          </ul>
        </React.Fragment>
      );
    }
    return button;
  }
}

Button.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  type: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'success', 'warning']),
  block: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  flat: PropTypes.bool,
  text: PropTypes.string,
  alignRight: PropTypes.bool,
  pullRight: PropTypes.bool,
  pullLeft: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.bool,
  to: PropTypes.string,
  app: PropTypes.bool,
  outline: PropTypes.bool,
  badge: PropTypes.node,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
};

Button.defaultProps = {
  id: null,
  size: null,
  type: 'default',
  block: false,
  icon: null,
  color: null,
  className: null,
  flat: false,
  text: null,
  alignRight: false,
  pullRight: false,
  pullLeft: false,
  disabled: false,
  margin: false,
  to: null,
  app: null,
  outline: null,
  badge: null,
  onClick: null,
  split: null,
  children: null,
  value: null,
  name: null,
};

export default Button;
