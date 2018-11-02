import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'icheck/skins/all.css'; // or single skin css

const $ = require('jquery');
$.iCheck = require('icheck');

class Checkbox extends Component {
  componentDidMount() {
    const { type = 'minimal', color = 'blue', onChange } = this.props;
    const className = `${type}-${color}`;
    const domElem = this.main;
    const hasChangeCallback = !!(onChange);
    $(domElem).iCheck({
      checkboxClass: `icheckbox_${className}`,
      radioClass: `iradio_${className}`,
    });
    $(domElem).on('ifChecked', () => {
      if (hasChangeCallback) { onChange(true); }
    });
    $(domElem).on('ifUnchecked', () => {
      if (hasChangeCallback) { onChange(false); }
    });
  }

  componentWillUnmount() {
    $(this.main).iCheck('destroy');
  }

  render() {
    const {
      type, color, pullRight = false, label,
    } = this.props;
    const { checked } = this.state;
    const className = `${type}-${color}`;
    return (
      <div className={pullRight ? 'pull-right' : ''}>
        <input type="checkbox" className={className} checked={checked} ref={(c) => { this.main = c; }} onChange={() => { }} />
        {` ${label}`}
      </div>
    );
  }
}

Checkbox.propTypes = {
  type: PropTypes.oneOf(['minimal', 'flat']),
  color: PropTypes.oneOf(['blue', 'red', 'green']),
  pullRight: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  type: 'minimal',
  color: 'blue',
  pullRight: false,
  label: null,
  onChange: null,
};

export default Checkbox;
