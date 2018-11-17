import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

import { Sizes } from '../../PropTypes';


class Text extends Component {
  state = {}

  render() {
    const {
      iconLeft, iconRight, addonLeft, addonRight, inputType, size,
      checkboxLeft, checkboxRight, radioLeft, radioRight, buttonLeft, buttonRight,
      rows, width, name, id, value, placeholder, disabled,
      onBlur, onChange, onFocus, onSelect, onKeyDown, onKeyUp, onKeyPress,
    } = this.props;
    const inputClasses = [
      inputType !== 'file' ? 'form-control' : null,
      size ? `input-${size}` : null,
    ].filter(p => p).join(' ');
    if (iconLeft || iconRight || addonLeft || addonRight
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
            {iconLeft && <span className="input-group-addon"><i className={`fa ${iconLeft}`} /></span>}
            {checkboxLeft && <span className="input-group-addon"><input type="checkbox" /></span>}
            {radioLeft && <span className="input-group-addon"><input type="radio" /></span>}
            {buttonLeft && <div className="input-group-btn">{buttonLeft}</div>}
            {inputType !== 'textarea'
              ? (
                <input
                  ref={(c) => { this.ref = c; }}
                  type={inputType}
                  className={inputClasses}
                  name={name}
                  id={id}
                  value={value}
                  placeholder={placeholder}
                  disabled={disabled}
                  onBlur={onBlur}
                  onChange={onChange}
                  onFocus={onFocus}
                  onSelect={onSelect}
                  onKeyDown={onKeyDown}
                  onKeyUp={onKeyUp}
                  onKeyPress={onKeyPress}
                />
              )
              : (
                <textarea
                  ref={(c) => { this.ref = c; }}
                  className={inputClasses}
                  name={name}
                  id={id}
                  value={value}
                  placeholder={placeholder}
                  disabled={disabled}
                  onBlur={onBlur}
                  onChange={onChange}
                  onFocus={onFocus}
                  onSelect={onSelect}
                  onKeyDown={onKeyDown}
                  onKeyUp={onKeyUp}
                  onKeyPress={onKeyPress}
                  rows={rows}
                />
              )}
            {addonRight && <span className="input-group-addon">{addonRight}</span>}
            {iconRight && <span className="input-group-addon"><i className={`fa ${iconRight}`} /></span>}
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
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                onSelect={onSelect}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
                style={{ width }}
              />
            )
            : (
              <textarea
                ref={(c) => { this.ref = c; }}
                className={inputClasses}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                onSelect={onSelect}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
                rows={rows}
                style={{ width }}
              />
            )
        }
      </Label>
    );
  }
}

Text.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  ...Label.propTypes,
};

Text.defaultProps = {
  iconLeft: null,
  iconRight: null,
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
  onBlur: null,
  onChange: null,
  onFocus: null,
  onSelect: null,
  onKeyDown: null,
  onKeyUp: null,
  onKeyPress: null,
};

export default Text;
