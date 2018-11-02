import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';

class Select extends Component {
  state = {}

  render() {
    const {
      options, label, name, disabled, multiple, value, onChange,
    } = this.props;
    return (
      <div className="form-group">
        {/* eslint-disable jsx-a11y/label-has-for */}
        <label htmlFor={name}>{label}</label>
        <select ref={(c) => { this.input = c; }} name={name} className="form-control" disabled={disabled} multiple={multiple} value={value} onChange={onChange}>
          {options.map(p => (
            <option key={uuidv4()} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
  })).isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  name: uuidv4(),
  label: null,
  disabled: false,
  multiple: false,
  value: null,
  onChange: null,
};

export default Select;
