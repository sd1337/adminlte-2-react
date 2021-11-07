import React, {
  Component, MouseEventHandler, ReactElement, ReactNode,
} from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { splitIcon } from '../Utilities';
import ButtonGroup from './ButtonGroup';
import './Button.css';
import { Colors, Sizes, Types } from '../PropTypes';
import Divider from './Divider';

interface ButtonProps {
  id?: string,
  size?: Sizes,
  type?: Types,
  block?: boolean,
  icon?: string,
  color?: Colors,
  className?: string,
  flat?: boolean,
  text?: string,
  alignRight?: boolean,
  pullRight?: boolean,
  pullLeft?: boolean,
  disabled?: boolean,
  margin?: boolean,
  to?: string,
  app?: boolean,
  outline?: boolean,
  badge: ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>,
  split?: boolean,
  children?: ReactElement | ReactElement[],
  value?: string | number,
  name?: string,
}

class Button extends Component<ButtonProps, {}> {
  static defaultProps = {
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

  render() {
    const {
      id, size, type, block, icon, color, flat, text, alignRight, disabled,
      // eslint-disable-next-line react/prop-types, no-unused-vars
      margin, pullRight = alignRight, pullLeft, to, app, badge, onClick, split,
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
    ].filter((p) => p).join(' ');

    const hasIcon = !!(icon);
    const localIcon = hasIcon ? splitIcon(icon) : null;

    const button = (
      <button
        id={id || ''}
        onClick={disabled ? undefined : onClick}
        type="button"
        className={buttonClasses}
        value={value}
        name={name}
      >
        {badge}
        {icon && <FontAwesomeIcon icon={localIcon as IconProp} />}
        {icon && text ? ' ' : ''}
        {text || ''}
      </button>
    );

    if (to) {
      return (<Link to={to}>{button}</Link>);
    } if (children) {
      if (!(children as ReactElement[]).length) { children = [children as ReactElement]; }
      if ((children as ReactElement[]).length > 0) {
        children = (children as ReactElement[]).map((p) => (p.type !== 'li' && p.type !== Divider ? (<li key={uuidv4()}>{p}</li>) : React.cloneElement(p, { key: uuidv4() })));
      } else {
        children = undefined;
      }
      if (split) {
        return (
          <ButtonGroup>
            {(text || icon || badge) && (
              <button
                onClick={disabled ? undefined : onClick}
                type="button"
                className={buttonClasses}
              >
                {badge}
                {icon && <FontAwesomeIcon icon={localIcon as IconProp} />}
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
        <>
          <button type="button" className={`${buttonClasses} dropdown-toggle`} data-toggle="dropdown">
            {`${text || ''} `}
            <FontAwesomeIcon icon={['fas', 'caret-down']} />
          </button>
          <ul className="dropdown-menu">
            {children}
          </ul>
        </>
      );
    }
    return button;
  }
}

export default Button;
