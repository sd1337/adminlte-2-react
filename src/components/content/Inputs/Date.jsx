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
import { SharedDateProps, SharedDateDefaultProps, DateValueShape } from './InputShapes';

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
    };
  }

  componentDidUpdate({ value: oldValue }, { internalValue: oldInternalValue }) {
    const { value } = this.props;
    const { internalValue } = this.state;
    if ((value !== undefined && (internalValue !== value))) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ internalValue: value });
    }
  }

  onChange(date) {
    const {
      onChange, name, id, format, value,
    } = this.props;
    // only set internalValue when not controlled from outside
    if (!value) {
      let newValue = date;
      
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
          <SingleDatePicker {...{
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
          }}
          />
        </div>
      </InputWrapper>
    );
  }
}

Date.propTypes = {
  value: DateValueShape,
  defaultValue: DateValueShape,
  onChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
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

export default Date;
