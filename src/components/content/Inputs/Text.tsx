import React, {
  Component,
} from 'react';
import { IInputProps } from './InputProps';
import InputWrapper from './InputWrapper';

interface TextProps extends IInputProps{
  inputType?: string,
  name?: string,
  id?: string,
  placeholder?: string,
  value?: string | number,
  disabled?: boolean,
  rows?: number,
}

interface TextState {

}

class Text extends Component<TextProps, TextState> {
  static defaultProps = {
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

  state = {};

  ref: HTMLInputElement | HTMLTextAreaElement | null = null;

  render() {
    const {
      inputType, rows, name, id, value, placeholder, disabled,
      onBlur, onChange, onFocus, onSelect, onKeyDown, onKeyUp, onKeyPress,
      // ...props
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

    const inputClasses = [
      inputType !== 'file' ? 'form-control' : null,
      size ? `input-${size}` : null,
    ].filter((p) => p).join(' ');
    let formElement;
    switch (inputType) {
      case 'textarea':
        formElement = (
          <textarea
            ref={(c) => { this.ref = c as HTMLTextAreaElement; }}
            className={inputClasses}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onBlur={onBlur}
            onChange={onChange as any}
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
            ref={(c) => { this.ref = c as HTMLInputElement; }}
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
        {formElement}
      </InputWrapper>
    );
  }
}

export default Text;
