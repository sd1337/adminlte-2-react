import React, { Component } from 'react';

import InputWrapper from './InputWrapper';
import { IInputProps, SelectOptionType } from './InputProps';

interface SelectProps extends IInputProps{
  options: SelectOptionType[],
  label: string,
  disabled: boolean,
  multiple: boolean,
  // value: string | number | string[] | number[], // PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  // onChange: PropTypes.func,
}

interface SelectState {

}

class Select extends Component<SelectProps, SelectState> {
  state: SelectState = {};

  mapOptions = (options: SelectOptionType[]) => (Array.isArray(options)
    ? options.map(this.mapSingleOption) : [this.mapSingleOption(options)]);

  mapSingleOption = (p: SelectOptionType) => {
    if (typeof p === 'object') {
      const { disabled } = this.props;
      const { value: propValue, text, disabled: optionDisabled } = p;
      return {
        value: propValue, text, disabled: optionDisabled || disabled,
      };
    }
    return { value: p, text: p };
  };

  render() {
    const {
      options, name, disabled = false, multiple = false, value, onChange,
    } = this.props;

    const {
      iconLeft, iconRight, addonLeft, addonRight, size, checkboxLeft,
      checkboxLeftProps, checkboxRight, checkboxRightProps, radioLeft, radioLeftProps,
      radioRight, radioRightProps, buttonLeft, buttonRight, width, help,
    } = this.props;

    const {
      label, labelPosition, labelXs, labelSm, labelMd, labelLg,
      xs, sm, md, lg, labelIcon, type, labelClass,
    } = this.props;

    return (
      <InputWrapper
        iconLeft={iconLeft}
        iconRight={iconRight}
        addonLeft={addonLeft}
        addonRight={addonRight}
        size={size}
        checkboxLeft={checkboxLeft}
        checkboxLeftProps={checkboxLeftProps}
        checkboxRight={checkboxRight}
        checkboxRightProps={checkboxRightProps}
        radioLeft={radioLeft}
        radioLeftProps={radioLeftProps}
        radioRight={radioRight}
        radioRightProps={radioRightProps}
        buttonLeft={buttonLeft}
        buttonRight={buttonRight}
        width={width}
        help={help}
//
        label={label}
        labelPosition={labelPosition}
        labelXs={labelXs}
        labelSm={labelSm}
        labelMd={labelMd}
        labelLg={labelLg}
        name={name}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        labelIcon={labelIcon}
        type={type}
        labelClass={labelClass}
      >
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

export default Select;
