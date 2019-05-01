import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Searchbar extends Component {
  state = {}

  render() {
    const {
      includeButton, onButtonClick, onChange, placeholder, value, defaultValue,
    } = this.props;
    return (
      <div className="sidebar-form">
        <div className="input-group">
          <input type="text" name="sidebar-search" className="form-control" placeholder={placeholder} onChange={onChange} value={value} defaultValue={defaultValue} />
          {includeButton && (
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat" onClick={onButtonClick}>
                <FontAwesomeIcon icon={['fas', 'search']} />
              </button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

Searchbar.propTypes = {
  includeButton: PropTypes.bool,
  onButtonClick: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Searchbar.defaultProps = {
  includeButton: true,
  onButtonClick: undefined,
  onChange: undefined,
  placeholder: undefined,
  value: undefined,
  defaultValue: undefined,
};

export default Searchbar;
