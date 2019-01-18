import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import InputWrapper from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';

class Date extends Component {
  state = { focused: false }

  constructor(props) {
    super(props);
    const { focused } = props;
    this.state.focused = focused;
    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onChange(date, ...args) {
    const {
      onChange, name, id, format,
    } = this.props;
    const fakeResult = {
      target: {
        value: date.format(format),
        id,
        type: 'text',
        name,
      },
    };
    if (onChange) {
      onChange(fakeResult);
    }
  }

  onFocusChange({ focused, ...args }) {
    this.setState({ focused });
  }

  render() {
    const {
      value,
      onChange: onDateChange,
      onFocusChange,
      name: id,
      placeholder,
      disabled,
      required,
      readOnly,
      screenReaderInputMessage,
      showClearDate,
      customCloseIcon,
      showDefaultInputIcon,
      customInputIcon,
      inputIconPosition,
      noBorder,
      block,
      small,
      regular,
      type,
      format: displayFormat,
      ...props
    } = this.props;
    const { focused } = this.state;
    let date = value;
    if (typeof value === 'string') {
      date = moment(value, displayFormat);
    }
    return (
      <InputWrapper {...{ name: id, ...props }}>
        <div className={`date-${type}`}>
          <SingleDatePicker {...{
            date,
            onDateChange: this.onChange,
            focused,
            onFocusChange: this.onFocusChange,
            id,
            placeholder,
            disabled,
            required,
            readOnly,
            screenReaderInputMessage,
            showClearDate,
            customCloseIcon,
            showDefaultInputIcon,
            customInputIcon,
            inputIconPosition,
            noBorder,
            block,
            small,
            regular,
            displayFormat,
          }}
          />
        </div>
      </InputWrapper>
    );
  }
}

Date.propTypes = {
  type: PropTypes.oneOf(Types),
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  screenReaderInputMessage: PropTypes.string,
  showClearDate: PropTypes.bool,
  customCloseIcon: PropTypes.node,
  showDefaultInputIcon: PropTypes.bool,
  customInputIcon: PropTypes.node,
  // inputIconPosition: PropTypes.oneOf(['']),,
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,
};

Date.defaultProps = {
  type: 'default',
  focused: false,
  placeholder: '',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: null,
  showClearDate: false,
  customCloseIcon: null,
  showDefaultInputIcon: false,
  customInputIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
};

export default Date;
