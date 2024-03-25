import React, {
  FormEventHandler, useCallback,
} from 'react';
import ReactDateTime, { DatetimepickerProps, EventOrValueHandler } from 'react-datetime';
import moment, { isMoment, Moment } from 'moment';
import 'react-datetime/css/react-datetime.css';
import './DateTime.css';
import InputWrapper, { InputWrapperProps } from './InputWrapper';

import { DateType } from './InputProps';
import { createSyntheticEvent } from './InputUtilities';

interface DateTimeProps extends InputWrapperProps {
  value?: DateType,
  defaultValue?: DateType,
  /**
   * @deprecated use onValueChange instead
   */
  onChange?: FormEventHandler<any>,
  /**
   * @param newValue either Moment (when valid) or string (when invalid)
   * @param validValue
   * @param invalidValue
   */
  onValueChange?: (newValue: Moment | string, validValue?: Moment, invalidValue?: string) => void,
  onClose?: EventOrValueHandler<any>,
  id?: string,
  name?: string,
  placeholder?: string,
  disabled?: boolean,
  format?: string,
  dateFormat?: string,
  timeFormat?: string,
  dateTimeProps?: DatetimepickerProps,
}

const DateTime = (props: DateTimeProps) => {
  const {
    value = undefined,
    defaultValue = undefined,
    onChange = undefined,
    onValueChange = undefined,
    onClose = undefined,
    id = undefined,
    name = undefined,
    placeholder = undefined,
    disabled = false,
    format = undefined,
    dateFormat = 'DD.MM.YYYY',
    timeFormat = 'hh:mm',
    dateTimeProps = undefined,
  } = props;

  const handleChange: ((value: string | Moment) => void) | undefined = useCallback((newValue) => {
    if (onChange) {
      let temp;
      if (newValue instanceof moment) {
        temp = (newValue as Moment).format(format);
      } else {
        temp = newValue;
      }
      const rawEvent = new Event('change');
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
    if (onValueChange) {
      if (isMoment(newValue)) {
        onValueChange(newValue, newValue, undefined);
      } else {
        onValueChange(newValue, undefined, newValue);
      }
    }
  }, [onChange, onValueChange, format, id, name]);

  const {
    iconLeft, iconRight, addonLeft, addonRight, size, checkboxLeft,
    checkboxLeftProps, checkboxRight, checkboxRightProps, radioLeft, radioLeftProps,
    radioRight, radioRightProps, buttonLeft, buttonRight, width, help,
  } = props;

  const {
    label, labelPosition, labelXs, labelSm, labelMd, labelLg,
    xs, sm, md, lg, labelIcon, type, labelClass,
  } = props;
  const {
    initialViewDate,
    input,
    open,
    locale = 'de',
    utc,
    displayTimeZone,
    onNavigate,
    onNavigateBack,
    onNavigateForward,
    initialViewMode,
    className,
    inputProps = {},
    isValidDate,
    renderDay,
    renderMonth,
    renderYear,
    strictParsing,
    closeOnSelect,
    timeConstraints,
    closeOnClickOutside,
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
        initialValue={defaultValue}
        initialViewDate={initialViewDate}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        input={input}
        open={open}
        locale={locale}
        utc={utc}
        displayTimeZone={displayTimeZone}
        onChange={handleChange}
        onClose={onClose}
        onNavigate={onNavigate}
        onNavigateBack={onNavigateBack}
        onNavigateForward={onNavigateForward}
        initialViewMode={initialViewMode}
        className={className}
        inputProps={inputProps}
        isValidDate={isValidDate}
        renderDay={renderDay}
        renderMonth={renderMonth}
        renderYear={renderYear}
        strictParsing={strictParsing}
        closeOnSelect={closeOnSelect}
        timeConstraints={timeConstraints}
        closeOnClickOutside={closeOnClickOutside}
      />
    </InputWrapper>
  );
};

export default DateTime;
