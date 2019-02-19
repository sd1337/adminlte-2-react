import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
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
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  timeFormat: PropTypes.string,
  dateTimeProps: PropTypes.shape({}),
};

DateTime.defaultProps = {
  value: null,
  defaultValue: undefined,
  onChange: null,
  id: null,
  name: null,
  placeholder: null,
  disabled: false,
  format: true,
  timeFormat: 'hh:mm',
  dateTimeProps: null,
};

export default DateTime;
