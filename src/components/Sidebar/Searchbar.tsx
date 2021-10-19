import React, { ChangeEventHandler, Component, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchbarProps {
  includeButton: boolean,
  onButtonClick: MouseEventHandler<HTMLButtonElement>,
  onChange: ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
  value: string | number,
  defaultValue: string | number,
}

class Searchbar extends Component<SearchbarProps, {}> {
  static defaultProps = {
    includeButton: true,
    onButtonClick: undefined,
    onChange: undefined,
    placeholder: undefined,
    value: undefined,
    defaultValue: undefined,
  };

  state = {};

  render() {
    const {
      includeButton, onButtonClick, onChange, placeholder, value, defaultValue,
    } = this.props;
    return (
      <div className="sidebar-form">
        <div className="input-group">
          <input
            type="text"
            name="sidebar-search"
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
          />
          {includeButton && (
            <span className="input-group-btn">
              <button
                type="submit"
                name="search"
                id="search-btn"
                className="btn btn-flat"
                onClick={onButtonClick}
              >
                <FontAwesomeIcon icon={['fas', 'search']} />
              </button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Searchbar;
