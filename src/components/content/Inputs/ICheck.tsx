import React, { Component, ReactElement } from 'react';
import uuidv4 from 'uuid/v4';
import 'icheck';
import 'icheck/skins/all.css';
import $ from 'jquery';

import InputWrapper, { InputWrapperProps } from './InputWrapper';
import { CombinedOptionType, ICheckRadioOptionType } from './InputProps';
import { Dictionary } from '../../PropTypes';

interface ICheckProps extends InputWrapperProps{
  options: CombinedOptionType[] | CombinedOptionType,
  name?: string,
  disabled?: boolean,
  value?: any, // PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  defaultValue: any, // PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  onChange: Function,
}
interface ICheckState {
  internalValue?: any,
  options?: ReactElement[],
}

class ICheck extends Component<ICheckProps, ICheckState> {
  static defaultProps = {
    options: [''],
    name: uuidv4(),
    disabled: false,
    value: undefined,
    defaultValue: undefined,
    onChange: null,
  };

  constructor(props: ICheckProps) {
    super(props);
    const { options, defaultValue, value } = props;
    this.state.internalValue = value || defaultValue;
    this.state.options = this.mapAllOptions(options);

    this.onChange = this.onChange.bind(this);
  }

  state: ICheckState = {};

  componentDidMount() {
    this.initializeICheck();
  }

  componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }: ICheckProps) {
    const { options, disabled, value } = this.props;
    if (oldDisabled !== disabled || oldOptions !== options) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.updateOptions();
    }
    if (oldValue !== value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ internalValue: value }, () => {
        if (oldValue) { $(this.ref[oldValue]).iCheck('uncheck'); }
        if (value) { $(this.ref[value]).iCheck('check'); }
        this.updateOptions();
      });
    }
  }

  componentWillUnmount() {
    $(Object.values(this.ref)).iCheck('destroy');
  }

  onChange(e: any) {
    const { internalValue } = this.state;
    if (internalValue === e.target.value) {
      return;
    }
    const { onChange } = this.props;
    const { target: { value } } = e;
    this.setState({ internalValue: value }, () => {
      this.updateOptions();
    });
    if (onChange) {
      onChange(e);
    }
  }

  ref: Dictionary = {};

  $ref: any = {};

  mapAllOptions = (options: CombinedOptionType | CombinedOptionType[]): ReactElement[] => this.mapOptions(options)
    .map(this.optionToJSXComponent);

  mapOptions = (options: CombinedOptionType | CombinedOptionType[]): ICheckRadioOptionType[] => (Array.isArray(options)
    ? options.map((p) => this.mapSingleOption(p)) : [this.mapSingleOption(options)]);

  mapSingleOption = (p: CombinedOptionType): ICheckRadioOptionType => {
    const { disabled } = this.props;
    const { internalValue } = this.state;
    if (typeof p === 'object') {
      const { value: propValue, text, disabled: optionDisabled } = p;
      return {
        value: propValue,
        text,
        disabled: optionDisabled || disabled,
        checked: (internalValue && internalValue === propValue) || false,
      };
    }
    return {
      value: p,
      text: p.toString(),
      // eslint-disable-next-line eqeqeq
      checked: (internalValue && p == internalValue) || false,
      disabled,
    };
  };

  optionToJSXComponent = ({
    value, text, disabled, checked,
  }: ICheckRadioOptionType, idx: number): ReactElement => {
    const { name, disabled: globalDisabled } = this.props;
    return (
      <label htmlFor={`${name}`} id={`label-${name}-option-${idx}`} key={value} style={{ marginRight: '8px' }}>
        <input
          ref={(c) => { this.ref[value] = c; }}
          name={name}
          checked={checked}
          onChange={this.onChange}
          value={value}
          disabled={disabled || globalDisabled}
          type="radio"
          className="a2r-icheck minimal"
        />
        <span>{text ? ` ${text}` : ''}</span>
      </label>
    );
  };

  updateOptions() {
    $(Object.values(this.ref)).iCheck('destroy');
    const { options } = this.props;
    this.setState({ options: this.mapAllOptions(options) }, () => {
      this.initializeICheck();
    });
  }

  initializeICheck() {
    const $ref = $(Object.values(this.ref)).iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue',
    });
    $ref.on('ifChecked', this.onChange);
    this.$ref = $ref;
  }

  render() {
    const {
      name,
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

    const { options: stateOptions } = this.state;
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
        {stateOptions}
      </InputWrapper>
    );
  }
}

// ICheck.defaultProps = {
//   options: [''],
//   name: uuidv4(),
//   disabled: false,
//   value: undefined,
//   defaultValue: undefined,
//   onChange: null,
// };

export default ICheck;
