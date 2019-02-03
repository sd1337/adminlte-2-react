import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import 'icheck';
import 'icheck/skins/all.css';
import $ from 'jquery';

import InputWrapper from './InputWrapper';

class ICheck extends Component {
  state = {}

  constructor(props) {
    super(props);
    const { options } = props;
    this.ref = {};
    const localOptions = this.mapOptions(options);
    this.mappedOptions = localOptions;
    const optionObject = {};
    localOptions.forEach((p) => {
      const { value } = p;
      const newOption = {};
      newOption.jsx = this.optionToJSXComponent(p);
      optionObject[value] = newOption;
    });
    this.options = optionObject;
    this.mappedOptions = localOptions;

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const $ref = $(Object.values(this.ref)).iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue',
    });
    const { onChange } = this.props;
    $ref.on('ifChecked', this.onChange);

    this.$ref = $ref;
  }

  componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }) {
    const { options, disabled, value } = this.props;
    const localOptions = this.mapOptions(options);
    this.mappedOptions = localOptions;
    /* localOptions.forEach((p) => {

    }); */
    if (oldValue !== value) {
      if (oldValue) { $(this.ref[oldValue]).iCheck('uncheck'); }
      if (value) { $(this.ref[value]).iCheck('check'); }
    }
  }

  componentWillUnmount() {
    $(this).iCheck('destroy');
  }

  onChange(e) {
    console.log(`new value for ${this.props.label} is ${e.target.value}`);
    const { onChange } = this.props;
    onChange(e);
  }

  mapOptions = options => (Array.isArray(options) ? options.map(this.mapSingleOption) : [this.mapSingleOption(options)]);

  mapSingleOption = (p) => {
    if (typeof p === 'object') {
      const { disabled, value } = this.props;
      const { value: propValue, text, disabled: optionDisabled } = p;
      return {
        value: propValue, text, disabled: optionDisabled || disabled, checked: propValue === value,
      };
    }
    return { value: p, text: p };
  }

  optionToJSXComponent = ({
    value, text, disabled, checked,
  }) => {
    const { name, onChange } = this.props;
    return (
      <label htmlFor={`${name}`} id={name} key={value} style={{ marginRight: '8px' }}>
        <input
          ref={(c) => { this.ref[value] = c; }}
          name={name}
          checked={checked}
          onChange={onChange}
          value={value}
          disabled={disabled}
          type="radio"
          className="minimal"
        />
        {text ? ` ${text}` : ''}
      </label>
    );
  }

  render() {
    const {
      options, name, onChange, disabled, value, ...props
    } = this.props;
    return (
      <InputWrapper {...{ name, ...props }}>
        {Object.values(this.options).map(({ jsx }) => jsx)}
      </InputWrapper>
    );
  }
}

ICheck.propTypes = {
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })), PropTypes.arrayOf(PropTypes.string)]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onChange: PropTypes.func,
};

ICheck.defaultProps = {
  options: [],
  name: uuidv4(),
  disabled: false,
  value: undefined,
  onChange: null,
};


export default ICheck;
