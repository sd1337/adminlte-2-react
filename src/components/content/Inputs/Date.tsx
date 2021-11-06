import React, { Component, ReactNode } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import moment, { Moment } from 'moment';
import uuid from 'uuid/v4';

import InputWrapper from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { SharedDateDefaultProps } from './InputShapes';
import { DateType, SharedDateProps } from './InputProps';

interface DateProps extends SharedDateProps {
  value: DateType,
  defaultValue: DateType,
  onChange?: Function,
  onFocusChange?: Function,
  id?: string,
  name?: string,
  type?: Types,
  focused?: boolean,
  placeholder?: string,
  customCloseIcon?: ReactNode,
  showDefaultInputIcon?: boolean,
  customInputIcon?: ReactNode,
  dateProps?: any,
  format?: string,
}

interface DateState {
  focused?: boolean;
  internalValue: Moment;
}

class Date extends Component<DateProps, DateState> {
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
    const newValue: Moment 
    this.state = {
      internalValue: value || defaultValue,
      focused,
    };
    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  state: DateState;

  componentDidUpdate() {
    const { value } = this.props;
    const { internalValue } = this.state;
    if ((value !== undefined && (internalValue !== value))) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ internalValue: value });
    }
  }

  onChange(date: Moment) {
    const {
      onChange, name, id, format, value,
    } = this.props;
    // only set internalValue when not controlled from outside
    if (!value) {
      this.setState({ internalValue: date });
    }
    if (onChange) {
      const fakeResult = {
        target: {
          value: date ? date.format(format) : null,
          id,
          type: 'text',
          name,
        },
      };
      onChange(fakeResult);
    }
  }

  onFocusChange({ focused }) {
    const { onFocusChange } = this.props;
    this.setState({ focused });
    if (onFocusChange) {
      onFocusChange(focused);
    }
  }

  render() {
    const {
      value,
      onChange,
      onFocusChange,
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
      // others
      ...props
    } = this.props;
    const { focused, internalValue } = this.state;
    let date = internalValue;
    if (typeof internalValue === 'string') {
      date = moment(internalValue, displayFormat);
    }
    return (
      <InputWrapper {...{ name, ...props }}>
        <div className={`date-${dateType}`}>
          <SingleDatePicker
            date={date}
          /* {...{
            date,
            onDateChange: this.onChange,
            focused,
            onFocusChange: this.onFocusChange,
            id: id || name,
            placeholder,
            customCloseIcon,
            showDefaultInputIcon,
            customInputIcon,
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
            // additional props
            ...dateProps,
          }} */
          />
        </div>
      </InputWrapper>
    );
  }
}

export default Date;
