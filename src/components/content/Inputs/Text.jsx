import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Sizes } from '../../PropTypes';
import InputWrapper from './InputWrapper';


class Text extends Component {
  state = {}

  render() {
    const {
      inputType, size, rows, name, id, value, placeholder, disabled,
      onBlur, onChange, onFocus, onSelect, onKeyDown, onKeyUp, onKeyPress,
      ...props
    } = this.props;
    const inputClasses = [
      inputType !== 'file' ? 'form-control' : null,
      size ? `input-${size}` : null,
    ].filter(p => p).join(' ');
    let formElement;
    switch (inputType) {
      case 'textarea':
        formElement = (
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
        );
        break;
      case 'readonly':
        formElement = <div>{value || '\u00A0'}</div>;
        break;
      default:
        formElement = (
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
        );
    }
    return (
      <InputWrapper size={size} {...props}>
        {formElement}
      </InputWrapper>
    );
  }
}

Text.propTypes = {
  inputType: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  size: PropTypes.oneOf(Sizes),
};

Text.defaultProps = {
  inputType: 'text',
  name: null,
  id: null,
  placeholder: null,
  value: undefined,
  disabled: false,
  rows: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onSelect: null,
  onKeyDown: null,
  onKeyUp: null,
  onKeyPress: null,
  size: null,
};

export default Text;
