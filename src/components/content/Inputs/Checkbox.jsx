import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputWrapper from './InputWrapper';

class Checkbox extends Component {
  state = {}

  render() {
    const {
      text, onChange, disabled, name, value, ...props
    } = this.props;
    return (
      <InputWrapper {...props}>
        <input
          name={name}
          onChange={onChange}
          checked={value}
          disabled={disabled}
          // {...this.props}
          type="checkbox"
        />
        {text ? ` ${text}` : ''}
      </InputWrapper>
    );
  }
}

Checkbox.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

Checkbox.defaultProps = {
  text: null,
  checked: null,
  onChange: null,
  disabled: false,
  name: null,
  value: null,
};

export default Checkbox;
