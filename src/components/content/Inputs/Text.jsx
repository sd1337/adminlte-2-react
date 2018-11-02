import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

import { Sizes, FormTypes } from '../../PropTypes';


class Text extends Component {
  state = {}

  render() {
    const {
      iconClassLeft, iconClassRight, addonLeft, addonRight, inputType, size,
      checkboxLeft, checkboxRight, radioLeft, radioRight, buttonLeft, buttonRight,
      rows, width, ...props
    } = this.props;
    const inputClasses = [
      inputType !== 'file' ? 'form-control' : null,
      size ? `input-${size}` : null,
    ].filter(p => p).join(' ');
    if (iconClassLeft || iconClassRight || addonLeft || addonRight
      || checkboxLeft || checkboxRight || radioLeft || radioRight
      || buttonLeft || buttonRight) {
      const groupClasses = [
        'input-group',
        size ? `input-group-${size}` : null,
      ].filter(p => p).join(' ');
      return (
        <Label {...this.props}>
          <div className={groupClasses} style={{ width }}>
            {addonLeft && <span className="input-group-addon">{addonLeft}</span>}
            {iconClassLeft && <span className="input-group-addon"><i className={`fa ${iconClassLeft}`} /></span>}
            {checkboxLeft && <span className="input-group-addon"><input type="checkbox" /></span>}
            {radioLeft && <span className="input-group-addon"><input type="radio" /></span>}
            {buttonLeft && <div className="input-group-btn">{buttonLeft}</div>}
            {inputType !== 'textarea'
              ? (
                <input
                  ref={(c) => { this.ref = c; }}
                  type={inputType}
                  className={inputClasses}
                  {...props}
                />
              )
              : <textarea ref={(c) => { this.ref = c; }} className={inputClasses} {...props} />}
            {addonRight && <span className="input-group-addon">{addonRight}</span>}
            {iconClassRight && <span className="input-group-addon"><i className={`fa ${iconClassRight}`} /></span>}
            {checkboxRight && <span className="input-group-addon"><input type="checkbox" /></span>}
            {radioRight && <span className="input-group-addon"><input type="radio" /></span>}
            {buttonRight && <div className="input-group-btn">{buttonRight}</div>}
          </div>
        </Label>
      );
    }
    return (
      <Label {...this.props}>
        {
            inputType !== 'textarea'
              ? (
                <input
                  ref={(c) => { this.ref = c; }}
                  type={inputType}
                  className={inputClasses}
                  {...props}
                  style={{ width }}
                />
              )
              : (
                <textarea
                  ref={(c) => { this.ref = c; }}
                  className={inputClasses}
                  rows={rows}
                  {...props}
                  style={{ width }}
                />
              )
          }
      </Label>
    );
  }
}

Text.propTypes = {
  iconClassLeft: PropTypes.string,
  iconClassRight: PropTypes.string,
  addonLeft: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  addonRight: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  inputType: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Sizes),
  checkboxLeft: PropTypes.bool,
  checkboxRight: PropTypes.bool,
  radioLeft: PropTypes.bool,
  radioRight: PropTypes.bool,
  buttonLeft: PropTypes.node,
  buttonRight: PropTypes.node,
  rows: PropTypes.number,
  width: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['above', 'left', 'none']),
  labelXs: PropTypes.number,
  labelSm: PropTypes.number,
  labelMd: PropTypes.number,
  labelLg: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  help: PropTypes.string,
  labelIconClass: PropTypes.string,
  type: PropTypes.oneOf(FormTypes),
};

Text.defaultProps = {
  iconClassLeft: null,
  iconClassRight: null,
  addonLeft: null,
  addonRight: null,
  inputType: 'text',
  name: null,
  id: null,
  placeholder: null,
  value: null,
  disabled: false,
  size: null,
  checkboxLeft: false,
  checkboxRight: false,
  radioLeft: false,
  radioRight: false,
  buttonLeft: null,
  buttonRight: null,
  rows: null,
  width: null,
  onChange: null,
  label: null,
  labelPosition: null,
  labelXs: null,
  labelSm: 2,
  labelMd: null,
  labelLg: null,
  xs: null,
  sm: 2,
  md: null,
  lg: null,
  help: null,
  labelIconClass: null,
  type: null,
};

export default Text;
