import React, { Component, FocusEventHandler, FormEventHandler } from 'react';
import ReactDateTime, { DatetimepickerProps } from 'react-datetime';
import moment, { Moment } from 'moment';
import 'react-datetime/css/react-datetime.css';
import './DateTime.css';
import InputWrapper, { InputWrapperProps } from './InputWrapper';

import { DateType } from './InputProps';
import { createSyntheticEvent } from './InputUtilities';

interface DateTimeProps extends InputWrapperProps {
  value?: DateType,
  defaultValue?: DateType,
  onChange?: FormEventHandler<any>,
  onBlur?: FocusEventHandler<any>,
  id?: string,
  name?: string,
  placeholder?: string,
  disabled?: boolean,
  format?: string,
  timeFormat?: string,
  dateTimeProps?: DatetimepickerProps,
}
interface DateTimeState {

}

class DateTime extends Component<DateTimeProps, DateTimeState> {
  static defaultProps: DateTimeProps = {
    value: undefined,
    defaultValue: undefined,
    onChange: undefined,
    onBlur: undefined,
    id: undefined,
    name: undefined,
    placeholder: undefined,
    disabled: false,
    format: undefined,
    timeFormat: 'hh:mm',
    dateTimeProps: undefined,
  };

  state: DateTimeState = {};

  onChange: ((value: string | Moment) => void) | undefined = (value) => {
    const {
      onChange, format, id, name,
    } = this.props;
    if (onChange) {
      const rawEvent = new Event('change');
      let temp;
      if (value instanceof moment) {
        temp = (value as Moment).format(format);
      } else {
        temp = value;
      }
      Object.defineProperty(rawEvent, 'target', {
        writable: false,
        value: {
          value: temp,
          id,
          type: 'text',
          name,
        },
      });
      const result = createSyntheticEvent(rawEvent);
      onChange(result);
    }
  };

  render() {
    const {
      name,
      value,
      defaultValue,
      format,
      timeFormat,
      onBlur,
      id,
      placeholder,
      disabled,
      dateTimeProps,
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
    const {
      viewDate,
      input,
      open,
      locale,
      utc,
      displayTimeZone,
      onViewModeChange,
      onNavigateBack,
      onNavigateForward,
      viewMode,
      className,
      inputProps = {},
      isValidDate,
      renderDay,
      renderMonth,
      renderYear,
      strictParsing,
      closeOnSelect,
      timeConstraints,
      disableOnClickOutside,
    } = (dateTimeProps as DatetimepickerProps) || {};
    inputProps.id = id;
    inputProps.placeholder = placeholder;
    inputProps.disabled = disabled;
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
        <ReactDateTime
          value={value}
          defaultValue={defaultValue}
          viewDate={viewDate}
          dateFormat={format}
          timeFormat={timeFormat}
          input={input}
          open={open}
          locale={locale}
          utc={utc}
          displayTimeZone={displayTimeZone}
          onChange={this.onChange}
          onBlur={onBlur as any}
          onViewModeChange={onViewModeChange}
          onNavigateBack={onNavigateBack}
          onNavigateForward={onNavigateForward}
          viewMode={viewMode}
          className={className}
          inputProps={inputProps}
          isValidDate={isValidDate}
          renderDay={renderDay}
          renderMonth={renderMonth}
          renderYear={renderYear}
          strictParsing={strictParsing}
          closeOnSelect={closeOnSelect}
          timeConstraints={timeConstraints}
          disableOnClickOutside={disableOnClickOutside}
        />
      </InputWrapper>
    );
  }
}

export default DateTime;
