import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';
import InputWrapper from './InputWrapper';


const Radio = ({
  options, name, onChange, ...props
}) => (
  <InputWrapper {...{ name, ...props }}>
    {options && options.map(p => (
      <div className="radio" key={uuidv4()}>
        <label htmlFor={name}>
          <input name={name} type="radio" onChange={onChange} {...p} />
          {p.label}
        </label>
      </div>
    ))}
  </InputWrapper>
);

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
  })).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  name: uuidv4(),
  onChange: null,
};

export default Radio;
