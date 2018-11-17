import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Checkbox extends Component {
  state = {}

  render() {
    const {
      label, onChange, disabled, name, value,
    } = this.props;
    return (
      <div className="checkbox">
        <label htmlFor={name}>
          <input ref={(c) => { this.input = c; }} name={name} onChange={onChange} checked={value} disabled={disabled} {...this.props} type="checkbox" />
          {label ? ` ${label}` : ''}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

Checkbox.defaultProps = {
  label: null,
  checked: null,
  onChange: null,
  disabled: false,
  name: null,
  value: null,
};

export default Checkbox;
