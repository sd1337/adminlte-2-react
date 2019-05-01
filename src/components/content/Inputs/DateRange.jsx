import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

import InputWrapper from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { SharedDateProps, SharedDateDefaultProps } from './InputShapes';

class DateRange extends Component {
  state = { focused: false, startDate: null, endDate: null }

  constructor(props) {
    super(props);
    const { focused } = props;
    this.state.focused = focused;
    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onChange({ startDate, endDate }) {
    const { startDate: currentStartDate, endDate: currentEndDate } = this.state;
    const {
      onStartChange, onEndChange, format, startDateId, endDateId,
    } = this.props;
    if (startDate !== currentStartDate) {
      const fakeResult = {
        target: {
          value: startDate ? startDate.format(format) : null,
          id: startDateId,
          type: 'text',
          name: startDateId,
        },
      };
      onStartChange(fakeResult);
    }
    if (endDate !== currentEndDate) {
      const fakeResult = {
        target: {
          value: endDate ? endDate.format(format) : null,
          id: endDateId,
          type: 'text',
          name: endDateId,
        },
      };
      onEndChange(fakeResult);
    }
    this.setState({ startDate, endDate });
  }

  onFocusChange(focused) {
    this.setState({ focused });
  }

  render() {
    const {
      type,
      startDate,
      endDate,
      startDateId,
      endDateId,
      onStartChange,
      onEndChange,
      onFocusChange,
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
      dateRangeProps,
      ...props
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
    return (
      <InputWrapper {...{ name: `${startDateId}-${endDateId}`, ...props }}>
        <div className={`date-${type}`}>
          <DateRangePicker {...{
            startDate: localStartDate,
            startDateId,
            endDate: localEndDate,
            endDateId,
            onDatesChange: this.onChange,
            focusedInput: focused,
            onFocusChange: this.onFocusChange,
            displayFormat,
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
            ...dateRangeProps,
          }}
          />
        </div>
      </InputWrapper>
    );
  }
}

DateRange.propTypes = {
  type: PropTypes.oneOf(Types),
  startDate: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
  endDate: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
  startDateId: PropTypes.string.isRequired,
  endDateId: PropTypes.string.isRequired,
  onStartChange: PropTypes.func.isRequired,
  onEndChange: PropTypes.func.isRequired,
  focused: PropTypes.oneOf(['startDate', 'endDate']),
  onFocusChange: PropTypes.func,
  format: PropTypes.string,
  dateRangeProps: PropTypes.shape({}),
  ...SharedDateProps,
};

DateRange.defaultProps = {
  type: 'default',
  focused: null,
  onFocusChange: null,
  format: undefined,
  dateRangeProps: null,
  ...SharedDateDefaultProps,
};

export default DateRange;
