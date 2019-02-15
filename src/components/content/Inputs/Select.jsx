import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import InputWrapper from './InputWrapper';
import { ListOfValueShape, ValueShape, ArrayOfValueShape } from './InputShapes';

class Select extends Component {
  state = {}


  mapOptions = options => (Array.isArray(options)
    ? options.map(this.mapSingleOption) : [this.mapSingleOption(options)]);

  mapSingleOption = (p) => {
    if (typeof p === 'object') {
      const { disabled } = this.props;
      const { value: propValue, text, disabled: optionDisabled } = p;
      return {
        value: propValue, text, disabled: optionDisabled || disabled,
      };
    }
    return { value: p, text: p };
  }

  render() {
    const {
      options, name, disabled, multiple, value, onChange, ...props
    } = this.props;

    return (
      <InputWrapper {...{ name, ...props }}>
        <select name={name} className="form-control" disabled={disabled} multiple={multiple} value={value} onChange={onChange}>
          {options && this.mapOptions(options).map(({
            value: optionValue, text, disabled: optionDisabled,
          }) => (
            <option
              key={optionValue}
              value={optionValue}
              disabled={optionDisabled}
            >
              {text}
            </option>
          ))}
        </select>
      </InputWrapper>
    );
  }
}

Select.propTypes = {
  options: ListOfValueShape,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  value: PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: null,
  name: uuidv4(),
  label: null,
  disabled: false,
  multiple: false,
  value: undefined,
  onChange: null,
};

export default Select;
