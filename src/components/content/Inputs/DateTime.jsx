import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTime.css';
import { DateValueShape } from './InputShapes';
import InputWrapper from './InputWrapper';

class DateTime extends Component {
  state = {}

  render() {
    const {
      value,
      defaultValue,
      onChange,
      id,
      name,
      placeholder,
      disabled,
      format,
      timeFormat,
      dateTimeProps,
      onBlur,
      ...props
    } = this.props;
    return (
      <InputWrapper {...{ name, ...props }}>
        <ReactDateTime
          {...{
            value,
            defaultValue,
            dateFormat: format,
            timeFormat,
            disabled,
            inputProps: {
              disabled,
              placeholder,
              ...dateTimeProps ? dateTimeProps.inputProps : null,
            },
            onChange,
            onBlur,
            ...dateTimeProps,
          }}
        />
      </InputWrapper>
    );
  }
}

DateTime.propTypes = {
  value: DateValueShape,
  defaultValue: DateValueShape,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  timeFormat: PropTypes.string,
  dateTimeProps: PropTypes.shape({}),
};

DateTime.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  onChange: undefined,
  onBlur: undefined,
  id: undefined,
  name: undefined,
  placeholder: undefined,
  disabled: false,
  format: true,
  timeFormat: 'hh:mm',
  dateTimeProps: undefined,
};

export default DateTime;
