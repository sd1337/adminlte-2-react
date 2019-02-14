import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import uuid from 'uuid/v4';

import InputWrapper from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { SharedDateProps, SharedDateDefaultProps } from './InputShapes';

class Date extends Component {
  state = { focused: false }

  constructor(props) {
    super(props);
    const { focused, value, defaultValue } = props;
    this.state.focused = focused;
    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);

    this.state = {
      internalValue: value || defaultValue,
    }
  }

  componentDidUpdate({ value: newValue }) {
    const { internalValue } = this.state;
    if (newValue !== internalValue) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ internalValue: newValue });
    }
  }

  onChange(date) {
    const {
      onChange, name, id, format,
    } = this.props;

    const fakeResult = {
      target: {
        value: date ? date.format(format) : null,
        id,
        type: 'text',
        name,
      },
    };
    if (onChange) {
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
      placeholder,
      customCloseIcon,
      showDefaultInputIcon,
      customInputIcon,
      type,
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
    const { focused } = this.state;
    let date = value;
    if (typeof value === 'string') {
      date = moment(value, displayFormat);
    }
    return (
      <InputWrapper {...{ name, ...props }}>
        <div className={`date-${type}`}>
          <SingleDatePicker {...{
            date,
            onDateChange: this.onChange,
            focused,
            onFocusChange: this.onFocusChange,
            id: name,
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
          }}
          />
        </div>
      </InputWrapper>
    );
  }
}

const valueType = PropTypes.oneOfType([
  MomentPropTypes.momentObj,
  PropTypes.string,
]);

Date.propTypes = {
  value: valueType,
  defaultValue: valueType,
  onChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.oneOf(Types),
  focused: PropTypes.bool,
  placeholder: PropTypes.string,
  // disabled: PropTypes.bool,
  // required: PropTypes.bool,
  // readOnly: PropTypes.bool,
  // showClearDate: PropTypes.bool,
  customCloseIcon: PropTypes.node,
  showDefaultInputIcon: PropTypes.bool,
  customInputIcon: PropTypes.node,
  // inputIconPosition: PropTypes.oneOf(['before', 'after']),
  // noBorder: PropTypes.bool,
  // block: PropTypes.bool,
  // small: PropTypes.bool,
  // regular: PropTypes.bool,
  dateProps: PropTypes.shape({}),
  name: PropTypes.string,
  format: PropTypes.string,
  ...SharedDateProps,
};

Date.defaultProps = {
  value: null,
  defaultValue: undefined,
  onChange: undefined,
  onFocusChange: undefined,
  id: undefined,
  type: 'default',
  focused: false,
  placeholder: '',
  // disabled: false,
  // required: false,
  // readOnly: false,
  // showClearDate: false,
  customCloseIcon: null,
  showDefaultInputIcon: false,
  customInputIcon: null,
  // noBorder: false,
  // block: false,
  // small: false,
  // regular: false,
  dateProps: null,
  name: uuid(),
  // inputIconPosition: null,
  format: undefined,
  ...SharedDateDefaultProps,
};

export default Date;
