import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import 'icheck';
import 'icheck/skins/all.css';
import $ from 'jquery';

import InputWrapper from './InputWrapper';
import { ListOfValueShape, ValueShape, ArrayOfValueShape } from './InputShapes';

class ICheck extends Component {
  state = {}

  constructor(props) {
    super(props);
    const { options } = props;
    this.ref = {};
    this.state = {
      options: this.mapAllOptions(options),
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const $ref = $(Object.values(this.ref)).iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue',
    });
    $ref.on('ifChecked', this.onChange);

    this.$ref = $ref;
  }

  componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }) {
    const { options, disabled, value } = this.props;
    if (oldValue !== value || oldDisabled !== disabled || oldOptions !== options) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ options: this.mapAllOptions(options) });
    }
    if (oldValue !== value || true) {
      if (oldValue) { $(this.ref[oldValue]).iCheck('uncheck'); }
      if (value) { $(this.ref[value]).iCheck('check'); }
    }
  }

  componentWillUnmount() {
    $(Object.values(this.ref)).iCheck('destroy');
  }

  onChange(e) {
    console.log(`new value for ${this.props.label} is ${e.target.value}`);
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  mapAllOptions = options => this.mapOptions(options).map(this.optionToJSXComponent);

  mapOptions = options => (Array.isArray(options) ? options.map(this.mapSingleOption) : [this.mapSingleOption(options)]);

  mapSingleOption = (p) => {
    const { disabled, value } = this.props;
    if (typeof p === 'object') {
      const { value: propValue, text, disabled: optionDisabled } = p;
      return {
        value: propValue,
        text,
        disabled: optionDisabled || disabled,
        checked: (value && propValue === value),
      };
    }
    return {
      value: p, text: p, checked: (value && p === value), disabled,
    };
  }

  optionToJSXComponent = ({
    value, text, disabled, checked,
  }) => {
    const { name, onChange, disabled: globalDisabled } = this.props;
    return (
      <label htmlFor={`${name}`} id={name} key={value} style={{ marginRight: '8px' }}>
        <input
          ref={(c) => { this.ref[value] = c; }}
          name={name}
          checked={checked}
          onChange={onChange}
          value={value}
          disabled={disabled || globalDisabled}
          type="radio"
          className="a2r-icheck minimal"
        />
        <span>{text ? ` ${text}` : ''}</span>
      </label>
    );
  }

  render() {
    const {
      options, name, onChange, disabled, value, ...props
    } = this.props;
    const { options: stateOptions } = this.state;
    return (
      <InputWrapper {...{ name, ...props }}>
        {stateOptions}
        {/* {Object.values(this.options).map(({ jsx }) => jsx)} */}
      </InputWrapper>
    );
  }
}

ICheck.propTypes = {
  options: ListOfValueShape,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  onChange: PropTypes.func,
};

ICheck.defaultProps = {
  options: [''],
  name: uuidv4(),
  disabled: false,
  value: undefined,
  onChange: null,
};


export default ICheck;
