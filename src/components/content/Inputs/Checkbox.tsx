import React, { Component } from 'react';

import InputWrapper from './InputWrapper';
import { IInputProps } from './InputProps';

interface CheckboxProps extends IInputProps{
  text: string,
  checked?: boolean,
  disabled: boolean,
  name: string,
  value?: string | number,
  defaultValue: string | number
}

interface CheckboxState {

}

class Checkbox extends Component<CheckboxProps, CheckboxState> {
  static defaultProps = {
    text: null,
    onChange: null,
    disabled: false,
    name: null,
  };

  state = {};

  render() {
    const {
      text, onChange, disabled, name, value, checked, defaultValue,
      //  ...props
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
        <input
          name={name}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          type="checkbox"
        />
        {text ? ` ${text}` : ''}
      </InputWrapper>
    );
  }
}

export default Checkbox;
