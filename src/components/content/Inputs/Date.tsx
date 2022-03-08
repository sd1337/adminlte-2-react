import React, { Component, FormEventHandler, ReactNode } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import moment, { Moment } from 'moment';
import uuid from 'uuid/v4';

import InputWrapper, { InputWrapperProps } from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { SharedDateDefaultProps } from './InputShapes';
import { DateType, SharedDateProps } from './InputProps';

interface DateProps extends SharedDateProps, InputWrapperProps {
  value: DateType,
  dateType: Types,
  defaultValue: DateType,
  onFocusChange?: Function,
  id?: string,
  name?: string,
  // type?: Types,
  focused?: boolean,
  placeholder?: string,
  customCloseIcon?: ReactNode,
  showDefaultInputIcon?: boolean,
  customInputIcon?: ReactNode,
  dateProps?: SingleDatePickerShape,
  format?: string,
  onChange: FormEventHandler<any>,
}

interface DateState {
  focused: boolean;
  internalValue: Moment | null;
}

class Date extends Component<DateProps, DateState> {
  private static toMoment(value: DateType, defaultValue?: DateType) {
    const temp = value || defaultValue;
    const newValue: Moment = temp instanceof moment ? (temp as Moment) : moment((temp as string));
    return newValue;
  }

  static defaultProps = {
    value: null,
    defaultValue: undefined,
    onChange: undefined,
    onFocusChange: undefined,
    id: undefined,
    type: 'default',
    dateType: 'default',
    focused: false,
    placeholder: '',
    customCloseIcon: null,
    showDefaultInputIcon: false,
    customInputIcon: null,
    dateProps: null,
    name: uuid(),
    format: undefined,
    ...SharedDateDefaultProps,
  };

  constructor(props: DateProps) {
    super(props);
    const { focused, value, defaultValue } = props;
    const newValue: Moment = Date.toMoment(value, defaultValue);
    this.state = {
      internalValue: newValue,
      focused: (focused as boolean),
    };
    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  state: DateState;

  componentDidUpdate() {
    const { value } = this.props;
    const { internalValue } = this.state;
    if ((value !== undefined && (internalValue !== value) && (internalValue && value && Math.abs(internalValue?.diff(value)) > 0))) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ internalValue: Date.toMoment(value) });
    }
  }

  onChange(date: Moment | null) {
    const {
      onChange, name, id, format, value,
    } = this.props;
    // only set internalValue when not controlled from outside
    if (!value) {
      this.setState({ internalValue: date });
    }
    if (onChange) {
      const fakeResult: any/* React.ChangeEvent<HTMLInputElement> */ = {
        target: {
          value: date ? date.format(format) : '',
          id: (id as string),
          type: 'text',
          name: (name as string),
        },
      };
      onChange(fakeResult);
    }
  }

  onFocusChange({ focused }: { focused: boolean }) {
    const { onFocusChange } = this.props;
    this.setState({ focused });
    if (onFocusChange) {
      onFocusChange(focused);
    }
  }

  render() {
    const {
      name,
      id,
      placeholder,
      customCloseIcon,
      showDefaultInputIcon,
      customInputIcon,
      dateType,
      format: displayFormat,
      // shared props
      disabled,
      required,
      readOnly,
      showClearDate,
      noBorder,
      block,
      small,
      regular,
      inputIconPosition,
      // additional
      dateProps,
    } = this.props;
    const { focused, internalValue } = this.state;
    let date = internalValue;
    if (typeof internalValue === 'string') {
      date = moment(internalValue, displayFormat);
    }
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
      ariaLabel,
      screenReaderInputMessage,
      verticalSpacing,
      keepFocusOnInput,
      renderWeekHeaderElement,
      orientation,
      anchorDirection,
      openDirection,
      horizontalMargin,
      withPortal,
      withFullScreenPortal,
      appendToBody,
      disableScroll,
      initialVisibleMonth,
      firstDayOfWeek,
      numberOfMonths,
      keepOpenOnDateSelect,
      reopenPickerOnClearDate,
      renderCalendarInfo,
      calendarInfoPosition,
      hideKeyboardShortcutsPanel,
      daySize,
      isRTL,
      verticalHeight,
      transitionDuration,
      horizontalMonthPadding,
      dayPickerNavigationInlineStyles,
      navPosition,
      navPrev,
      navNext,
      renderNavPrevButton,
      renderNavNextButton,
      onPrevMonthClick,
      onNextMonthClick,
      onClose,
      renderCalendarDay,
      renderDayContents,
      enableOutsideDays,
      isDayBlocked,
      isOutsideRange,
      isDayHighlighted,

      monthFormat,
      weekDayFormat,
      phrases,
      dayAriaLabelFormat,

      renderMonthElement,
    } = (dateProps as SingleDatePickerShape) || {};

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
        <div className={`date-${dateType}`}>
          <SingleDatePicker
            id={((id || name) as string)}
            date={date}
            focused={focused}
            onDateChange={this.onChange}
            onFocusChange={this.onFocusChange}
            placeholder={placeholder}
            ariaLabel={ariaLabel}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            screenReaderInputMessage={screenReaderInputMessage}
            showClearDate={showClearDate}
            customCloseIcon={customCloseIcon}
            showDefaultInputIcon={showDefaultInputIcon}
            inputIconPosition={inputIconPosition}
            customInputIcon={customInputIcon}
            noBorder={noBorder}
            block={block}
            small={small}
            regular={regular}
            verticalSpacing={verticalSpacing}
            keepFocusOnInput={keepFocusOnInput}
            renderWeekHeaderElement={renderWeekHeaderElement}
            orientation={orientation}
            anchorDirection={anchorDirection}
            openDirection={openDirection}
            horizontalMargin={horizontalMargin}
            withPortal={withPortal}
            withFullScreenPortal={withFullScreenPortal}
            appendToBody={appendToBody}
            disableScroll={disableScroll}
            initialVisibleMonth={initialVisibleMonth}
            firstDayOfWeek={firstDayOfWeek}
            numberOfMonths={numberOfMonths}
            keepOpenOnDateSelect={keepOpenOnDateSelect}
            reopenPickerOnClearDate={reopenPickerOnClearDate}
            renderCalendarInfo={renderCalendarInfo}
            calendarInfoPosition={calendarInfoPosition}
            hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
            daySize={daySize}
            isRTL={isRTL}
            verticalHeight={verticalHeight}
            transitionDuration={transitionDuration}
            horizontalMonthPadding={horizontalMonthPadding}
            dayPickerNavigationInlineStyles={dayPickerNavigationInlineStyles}
            navPosition={navPosition}
            navPrev={navPrev}
            navNext={navNext}
            renderNavPrevButton={renderNavPrevButton}
            renderNavNextButton={renderNavNextButton}
            onPrevMonthClick={onPrevMonthClick}
            onNextMonthClick={onNextMonthClick}
            onClose={onClose}
            renderCalendarDay={renderCalendarDay}
            renderDayContents={renderDayContents}
            enableOutsideDays={enableOutsideDays}
            isDayBlocked={isDayBlocked}
            isOutsideRange={isOutsideRange}
            isDayHighlighted={isDayHighlighted}
            displayFormat={displayFormat}
            monthFormat={monthFormat}
            weekDayFormat={weekDayFormat}
            phrases={phrases}
            dayAriaLabelFormat={dayAriaLabelFormat}
            renderMonthElement={renderMonthElement}
            // TODO: get this prop fixed
            // renderMonthText={renderMonthText}
          />
        </div>
      </InputWrapper>
    );
  }
}

export default Date;
