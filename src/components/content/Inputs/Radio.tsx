import React, { ReactElement } from 'react';
import uuidv4 from 'uuid';
import InputWrapper from './InputWrapper';

import { IInputProps, RadioOptionType } from './InputProps';

interface Props extends IInputProps {
  options: RadioOptionType[],
}

export default function Radio(props: Props): ReactElement {
  const { options, name, onChange } = props;
  const {
    iconLeft, iconRight, addonLeft, addonRight, size, checkboxLeft,
    checkboxLeftProps, checkboxRight, checkboxRightProps, radioLeft, radioLeftProps,
    radioRight, radioRightProps, buttonLeft, buttonRight, width, help,
  } = props;

  const {
    label, labelPosition, labelXs, labelSm, labelMd, labelLg,
    xs, sm, md, lg, labelIcon, type, labelClass,
  } = props;
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
      {options ? options.map(({
        label: inputLabel, value, checked, disabled, id,
      }): JSX.Element => (
        <div className="radio" key={uuidv4()}>
          <label htmlFor={name}>
            <input name={name} type="radio" onChange={onChange} value={value} checked={checked} disabled={disabled} id={id} />
            {inputLabel}
          </label>
        </div>
      )) : null}
    </InputWrapper>
  );
}
