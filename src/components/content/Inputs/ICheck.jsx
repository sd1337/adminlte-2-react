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
    const { options, defaultValue, value } = props;
    this.ref = {};
    this.state = {};
    this.state.internalValue = value || defaultValue;
    this.state.options = this.mapAllOptions(options);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.initializeICheck();
  }

  componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }) {
    const { options, disabled, value } = this.props;
    if (oldDisabled !== disabled || oldOptions !== options) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.updateOptions();
    }
    if (oldValue !== value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ internalValue: value }, () => {
        if (oldValue) { $(this.ref[oldValue]).iCheck('uncheck'); }
        if (value) { $(this.ref[value]).iCheck('check'); }
        this.updateOptions();
      });
    }
  }

  componentWillUnmount() {
    $(Object.values(this.ref)).iCheck('destroy');
  }

  onChange(e) {
    const { internalValue } = this.state;
    if (internalValue === e.target.value) {
      return;
    }
    const { onChange } = this.props;
    const { target: { value } } = e;
    this.setState({ internalValue: value }, () => {
      this.updateOptions();
    });
    if (onChange) {
      onChange(e);
    }
  }

  mapAllOptions = options => this.mapOptions(options)
    .map(this.optionToJSXComponent);

  mapOptions = options => (Array.isArray(options)
    ? options.map(p => this.mapSingleOption(p)) : [this.mapSingleOption(options)]);

  mapSingleOption = (p) => {
    const { disabled } = this.props;
    const { internalValue } = this.state;
    if (typeof p === 'object') {
      const { value: propValue, text, disabled: optionDisabled } = p;
      return {
        value: propValue,
        text,
        disabled: optionDisabled || disabled,
        checked: (internalValue && internalValue === propValue) || false,
      };
    }
    return {
      value: p,
      text: p,
      // eslint-disable-next-line eqeqeq
      checked: (internalValue && p == internalValue) || false,
      disabled,
    };
  }

  optionToJSXComponent = ({
    value, text, disabled, checked,
  }, idx) => {
    const { name, disabled: globalDisabled } = this.props;
    return (
      <label htmlFor={`${name}`} id={`label-${name}-option-${idx}`} key={value} style={{ marginRight: '8px' }}>
        <input
          ref={(c) => { this.ref[value] = c; }}
          name={name}
          checked={checked}
          onChange={this.onChange}
          value={value}
          disabled={disabled || globalDisabled}
          type="radio"
          className="a2r-icheck minimal"
        />
        <span>{text ? ` ${text}` : ''}</span>
      </label>
    );
  }

  updateOptions() {
    $(Object.values(this.ref)).iCheck('destroy');
    const { options } = this.props;
    this.setState({ options: this.mapAllOptions(options) }, () => {
      this.initializeICheck();
    });
  }

  initializeICheck() {
    const $ref = $(Object.values(this.ref)).iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue',
    });
    $ref.on('ifChecked', this.onChange);
    this.$ref = $ref;
  }

  render() {
    const {
      options, name, onChange, disabled, value, ...props
    } = this.props;
    const { options: stateOptions } = this.state;
    return (
      <InputWrapper {...{ name, ...props }}>
        {stateOptions}
      </InputWrapper>
    );
  }
}

ICheck.propTypes = {
  options: ListOfValueShape,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  defaultValue: PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  onChange: PropTypes.func,
};

ICheck.defaultProps = {
  options: [''],
  name: uuidv4(),
  disabled: false,
  value: undefined,
  defaultValue: undefined,
  onChange: null,
};


export default ICheck;
