import React, { Component, FormEventHandler } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, DateRangePickerShape } from 'react-dates';
import moment, { Moment } from 'moment';

import InputWrapper, { InputWrapperProps } from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { SharedDateDefaultProps } from './InputShapes';
import { DateType, SharedDateProps } from './InputProps';
import { createSyntheticEvent } from './InputUtilities';

type Focused = 'startDate' | 'endDate';

interface DateRangeProps extends SharedDateProps, InputWrapperProps {
  dateType: Types,
  startDate: DateType,
  endDate: DateType,
  startDateId: string,
  endDateId: string,
  onStartChange: FormEventHandler<any>,
  onEndChange: FormEventHandler<any>,
  focused: Focused,
  onFocusChange: Function,
  format: string,
  dateRangeProps: DateRangePickerShape,
}

interface DateRangeState {
  focused: Focused | null;
  startDate: Moment | null;
  endDate: Moment | null;
}

class DateRange extends Component<DateRangeProps, DateRangeState> {
  static defaultProps = {
    type: 'default',
    focused: null,
    onFocusChange: null,
    format: undefined,
    dateRangeProps: null,
    ...SharedDateDefaultProps,
  };

  constructor(props: DateRangeProps) {
    super(props);
    const { focused } = props;
    this.state.focused = focused;
    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  state: DateRangeState = { focused: null, startDate: null, endDate: null };

  onChange({ startDate, endDate }: { startDate: Moment | null, endDate: Moment | null }) {
    const { startDate: currentStartDate, endDate: currentEndDate } = this.state;
    const {
      onStartChange, onEndChange, format, startDateId, endDateId,
    } = this.props;
    if (startDate !== currentStartDate) {
      const rawEvent = new Event('change');
      Object.defineProperty(rawEvent, 'target', {
        writable: false,
        value: {
          value: startDate ? startDate.format(format) : null,
          id: startDateId,
          type: 'text',
          name: startDateId,
        },
      });
      const result = createSyntheticEvent(rawEvent);
      onStartChange(result);
    }
    if (endDate !== currentEndDate) {
      const rawEvent = new Event('change');
      Object.defineProperty(rawEvent, 'target', {
        writable: false,
        value: {
          value: endDate ? endDate.format(format) : null,
          id: endDateId,
          type: 'text',
          name: endDateId,
        },
      });
      const result = createSyntheticEvent(rawEvent);
      onEndChange(result);
    }
    this.setState({ startDate, endDate });
  }

  onFocusChange(focused: Focused | null) {
    this.setState({ focused });
  }

  render() {
    const {
      dateType,
      startDate,
      endDate,
      startDateId,
      endDateId,
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
      //
      dateRangeProps,
      // ...props
    } = this.props;
    const { focused } = this.state;
    let localStartDate = startDate;
    let localEndDate = endDate;
    if (typeof localStartDate === 'string') {
      localStartDate = moment(localStartDate, displayFormat);
    }
    if (typeof localEndDate === 'string') {
      localEndDate = moment(localEndDate, displayFormat);
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
      onClose,
      startDatePlaceholderText,
      startDateOffset,
      endDateOffset,
      endDatePlaceholderText,
      startDateAriaLabel,
      endDateAriaLabel,
      screenReaderInputMessage,
      showDefaultInputIcon,
      customInputIcon,
      customArrowIcon,
      customCloseIcon,
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
      daySize,
      isRTL,
      firstDayOfWeek,
      initialVisibleMonth,
      numberOfMonths,
      keepOpenOnDateSelect,
      reopenPickerOnClearDates,
      renderCalendarInfo,
      calendarInfoPosition,
      hideKeyboardShortcutsPanel,
      verticalHeight,
      transitionDuration,
      horizontalMonthPadding,
      verticalSpacing,
      dayPickerNavigationInlineStyles,
      navPosition,
      navPrev,
      navNext,
      renderNavPrevButton,
      renderNavNextButton,
      onPrevMonthClick,
      onNextMonthClick,
      renderCalendarDay,
      renderDayContents,
      minimumNights,
      minDate,
      maxDate,
      enableOutsideDays,
      isDayBlocked,
      isOutsideRange,
      isDayHighlighted,
      monthFormat,
      weekDayFormat,
      phrases,
      dayAriaLabelFormat,
      renderMonthElement,
    } = (dateRangeProps as DateRangePickerShape) || {};

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
        // name={name}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        labelIcon={labelIcon}
        type={type}
        labelClass={labelClass}
      >
        <div className={`date-${dateType}`}>
          <DateRangePicker
            startDate={localStartDate}
            startDateId={startDateId}
            endDate={localEndDate}
            endDateId={endDateId}
            focusedInput={focused}
            onDatesChange={this.onChange}
            onFocusChange={this.onFocusChange}
//
            onClose={onClose}
            startDatePlaceholderText={startDatePlaceholderText}
            startDateOffset={startDateOffset}
            endDateOffset={endDateOffset}
            endDatePlaceholderText={endDatePlaceholderText}
            startDateAriaLabel={startDateAriaLabel}
            endDateAriaLabel={endDateAriaLabel}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            screenReaderInputMessage={screenReaderInputMessage}
            showClearDates={showClearDate}
            showDefaultInputIcon={showDefaultInputIcon}
            inputIconPosition={inputIconPosition}
            customInputIcon={customInputIcon}
            customArrowIcon={customArrowIcon}
            customCloseIcon={customCloseIcon}
            noBorder={noBorder}
            block={block}
            small={small}
            regular={regular}
            keepFocusOnInput={keepFocusOnInput}
//
            renderWeekHeaderElement={renderWeekHeaderElement}
            orientation={orientation}
            anchorDirection={anchorDirection}
            openDirection={openDirection}
            horizontalMargin={horizontalMargin}
            withPortal={withPortal}
            withFullScreenPortal={withFullScreenPortal}
            appendToBody={appendToBody}
            disableScroll={disableScroll}
            daySize={daySize}
            isRTL={isRTL}
            firstDayOfWeek={firstDayOfWeek}
            initialVisibleMonth={initialVisibleMonth}
            numberOfMonths={numberOfMonths}
            keepOpenOnDateSelect={keepOpenOnDateSelect}
            reopenPickerOnClearDates={reopenPickerOnClearDates}
            renderCalendarInfo={renderCalendarInfo}
            calendarInfoPosition={calendarInfoPosition}
            hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
            verticalHeight={verticalHeight}
            transitionDuration={transitionDuration}
            horizontalMonthPadding={horizontalMonthPadding}
            verticalSpacing={verticalSpacing}
//
            dayPickerNavigationInlineStyles={dayPickerNavigationInlineStyles}
            navPosition={navPosition}
            navPrev={navPrev}
            navNext={navNext}
            renderNavPrevButton={renderNavPrevButton}
            renderNavNextButton={renderNavNextButton}
            onPrevMonthClick={onPrevMonthClick}
            onNextMonthClick={onNextMonthClick}
//
            renderCalendarDay={renderCalendarDay}
            renderDayContents={renderDayContents}
            minimumNights={minimumNights}
            minDate={minDate}
            maxDate={maxDate}
            enableOutsideDays={enableOutsideDays}
            isDayBlocked={isDayBlocked}
            isOutsideRange={isOutsideRange}
            isDayHighlighted={isDayHighlighted}
//
            displayFormat={displayFormat}
            monthFormat={monthFormat}
            weekDayFormat={weekDayFormat}
            phrases={phrases}
            dayAriaLabelFormat={dayAriaLabelFormat}
//
            renderMonthElement={renderMonthElement}
            // TODO: get this prop fixed
            // renderMonthText={renderMonthText}
          />
        </div>
      </InputWrapper>
    );
  }
}

export default DateRange;
