import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { splitIcon } from '../Utilities';
import ButtonGroup from './ButtonGroup';

class Button extends Component {
  render() {
    const {
      id, size, type, block, icon, color, classes, flat, text, alignRight, disabled,
      margin, pullRight = alignRight, pullLeft, to, app, badge, badgeText, onClick, split,
    } = this.props;
    let { children } = this.props;
    const buttonClasses = ['btn',
      block ? 'btn-block' : '',
      `btn-${type}`,
      flat ? 'btn-flat' : '',
      classes ? classes.join(' ') : '',
      color ? `bg-${color}` : '',
      size ? `btn-${size}` : '',
      pullRight ? 'pull-right' : '',
      pullLeft ? 'pull-left' : '',
      disabled ? 'disabled' : '',
      margin ? 'margin' : '',
      flat ? 'btn-flat' : '',
      app ? 'btn-app' : '',
    ].join(' ');

    const hasIcon = !!(icon);
    const localIcon = hasIcon ? splitIcon(icon) : null;

    const button = (
      <button
        id={id || ''}
        onClick={disabled ? null : onClick}
        type="button"
        className={buttonClasses}
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
      children = children.map(p => (p.type !== 'li' && p.type.name !== 'Divider' ? (<li key={uuidv4()}>{p}</li>) : React.cloneElement(p, { key: uuidv4() })));
      if (split) {
        return (
          <ButtonGroup>
            {text && <button type="button" className={buttonClasses}>{text}</button>}
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
  classes: PropTypes.string,
  flat: PropTypes.bool,
  text: PropTypes.string,
  alignRight: PropTypes.bool,
  pullRight: PropTypes.bool,
  pullLeft: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.bool,
  to: PropTypes.string,
  app: PropTypes.bool,
  badge: PropTypes.node,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  id: null,
  size: null,
  type: 'default',
  block: false,
  icon: null,
  color: null,
  classes: null,
  flat: false,
  text: null,
  alignRight: false,
  pullRight: false,
  pullLeft: false,
  disabled: false,
  margin: false,
  to: null,
  app: null,
  badge: null,
  onClick: null,
  split: null,
  children: null,
};

export default Button;
