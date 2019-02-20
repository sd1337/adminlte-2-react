import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Label from './Label';
import { Sizes } from '../../PropTypes';
import { splitIcon } from '../../Utilities';


class InputWrapper extends Component {
  state = {}

  render() {
    const {
      iconLeft, iconRight, addonLeft, addonRight, size,
      checkboxLeft, checkboxRight, radioLeft, radioRight, buttonLeft, buttonRight,
      children, checkboxLeftProps, checkboxRightProps, radioLeftProps, radioRightProps,
      width, help, ...props
    } = this.props;
    const groupClasses = [
      'input-group',
      size ? `input-group-${size}` : null,
    ].filter(p => p).join(' ');
    if (iconLeft || iconRight || addonLeft || addonRight
      || checkboxLeft || checkboxRight || radioLeft || radioRight
      || buttonLeft || buttonRight) {
      const iconLeftClass = splitIcon(iconLeft);
      const iconRightClass = splitIcon(iconRight);
      return (
        <Label {...props}>
          <div className={groupClasses} style={{ width }}>
            {addonLeft && <span className="input-group-addon">{addonLeft}</span>}
            {iconLeft && <span className="input-group-addon"><FontAwesomeIcon icon={iconLeftClass} /></span>}
            {checkboxLeft && <span className="input-group-addon"><input type="checkbox" {...checkboxLeftProps} /></span>}
            {radioLeft && <span className="input-group-addon"><input type="radio" {...radioLeftProps} /></span>}
            {buttonLeft && <div className="input-group-btn">{buttonLeft}</div>}
            {children}
            {addonRight && <span className="input-group-addon">{addonRight}</span>}
            {iconRight && <span className="input-group-addon"><FontAwesomeIcon icon={iconRightClass} /></span>}
            {checkboxRight && <span className="input-group-addon"><input type="checkbox" {...checkboxRightProps} /></span>}
            {radioRight && <span className="input-group-addon"><input type="radio" {...radioRightProps} /></span>}
            {buttonRight && <div className="input-group-btn">{buttonRight}</div>}
          </div>
        </Label>
      );
    }
    return (
      <Label {...this.props}>
        <div className={groupClasses} style={{ width }}>
          {children}
        </div>
        {help && <p className="help-block">{help}</p>}
      </Label>
    );
  }
}

InputWrapper.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  addonLeft: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  addonRight: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOf(Sizes),
  checkboxLeft: PropTypes.bool,
  checkboxLeftProps: PropTypes.shape({}),
  checkboxRight: PropTypes.bool,
  checkboxRightProps: PropTypes.shape({}),
  radioLeft: PropTypes.bool,
  radioLeftProps: PropTypes.shape({}),
  radioRight: PropTypes.bool,
  radioRightProps: PropTypes.shape({}),
  buttonLeft: PropTypes.node,
  buttonRight: PropTypes.node,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  help: PropTypes.string,
};

InputWrapper.defaultProps = {
  iconLeft: null,
  iconRight: null,
  addonLeft: null,
  addonRight: null,
  size: null,
  checkboxLeft: false,
  checkboxLeftProps: null,
  checkboxRight: false,
  checkboxRightProps: null,
  radioLeft: false,
  radioLeftProps: null,
  radioRight: false,
  radioRightProps: null,
  buttonLeft: null,
  buttonRight: null,
  width: '100%',
  help: null,
};

export default InputWrapper;
