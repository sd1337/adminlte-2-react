import React, { Component, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Label, { LabelProps } from './Label';
import { Sizes } from '../../PropTypes';
import { splitIcon } from '../../Utilities';

export interface InputWrapperProps extends LabelProps {
  iconLeft?: string,
  iconRight?: string,
  addonLeft?: ReactNode,
  addonRight?: ReactNode,
  size?: Sizes,
  checkboxLeft?: boolean,
  checkboxLeftProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  checkboxRight?: boolean,
  checkboxRightProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  radioLeft?: boolean,
  radioLeftProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  radioRight?: boolean,
  radioRightProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  buttonLeft?: ReactNode,
  buttonRight?: ReactNode,
  children?: ReactNode,
  width?: string,
  help?: string,
}

interface InputWrapperState {

}

class InputWrapper extends Component<InputWrapperProps, InputWrapperState> {
  static defaultProps = {
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

  state = {};

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
    ].filter((p) => p).join(' ');
    if (iconLeft || iconRight || addonLeft || addonRight
      || checkboxLeft || checkboxRight || radioLeft || radioRight
      || buttonLeft || buttonRight) {
      const iconLeftClass = splitIcon(iconLeft);
      const iconRightClass = splitIcon(iconRight);
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Label {...props}>
          <div className={groupClasses} style={{ width }}>
            {addonLeft && <span className="input-group-addon">{addonLeft}</span>}
            {iconLeft && <span className="input-group-addon"><FontAwesomeIcon icon={iconLeftClass} /></span>}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {checkboxLeft && <span className="input-group-addon"><input type="checkbox" {...checkboxLeftProps} /></span>}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {radioLeft && <span className="input-group-addon"><input type="radio" {...radioLeftProps} /></span>}
            {buttonLeft && <div className="input-group-btn">{buttonLeft}</div>}
            {children}
            {addonRight && <span className="input-group-addon">{addonRight}</span>}
            {iconRight && <span className="input-group-addon"><FontAwesomeIcon icon={iconRightClass} /></span>}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {checkboxRight && <span className="input-group-addon"><input type="checkbox" {...checkboxRightProps} /></span>}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {radioRight && <span className="input-group-addon"><input type="radio" {...radioRightProps} /></span>}
            {buttonRight && <div className="input-group-btn">{buttonRight}</div>}
          </div>
        </Label>
      );
    }
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Label {...this.props}>
        <div className={groupClasses} style={{ width }}>
          {children}
        </div>
        {help && <p className="help-block">{help}</p>}
      </Label>
    );
  }
}

// InputWrapper.propTypes = {
//   iconLeft: PropTypes.string,
//   iconRight: PropTypes.string,
//   addonLeft: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
//   addonRight: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
//   size: PropTypes.oneOf(Sizes),
//   checkboxLeft: PropTypes.bool,
//   checkboxLeftProps: PropTypes.shape({}),
//   checkboxRight: PropTypes.bool,
//   checkboxRightProps: PropTypes.shape({}),
//   radioLeft: PropTypes.bool,
//   radioLeftProps: PropTypes.shape({}),
//   radioRight: PropTypes.bool,
//   radioRightProps: PropTypes.shape({}),
//   buttonLeft: PropTypes.node,
//   buttonRight: PropTypes.node,
//   children: PropTypes.node.isRequired,
//   width: PropTypes.string,
//   help: PropTypes.string,
// };

// InputWrapper.defaultProps = {
//   iconLeft: null,
//   iconRight: null,
//   addonLeft: null,
//   addonRight: null,
//   size: null,
//   checkboxLeft: false,
//   checkboxLeftProps: null,
//   checkboxRight: false,
//   checkboxRightProps: null,
//   radioLeft: false,
//   radioLeftProps: null,
//   radioRight: false,
//   radioRightProps: null,
//   buttonLeft: null,
//   buttonRight: null,
//   width: '100%',
//   help: null,
// };

export default InputWrapper;
