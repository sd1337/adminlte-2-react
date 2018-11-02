import React, { Component } from 'react';
import PropTypes from 'prop-types';

const $ = require('jquery');
require('jquery-sparkline');

class Sparkbar extends Component {
  componentDidMount() {
    const { color, height = 30 } = this.props;
    const elem = $(this.main);
    elem.sparkline('html', {
      type: 'bar',
      height,
      barColor: color,
    });
  }

  render() {
    const { data, padding } = this.props;
    return (<div className={padding ? 'pad' : ''} ref={(c) => { this.main = c; }}>{data.join(',')}</div>);
  }
}

Sparkbar.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  padding: PropTypes.bool,
};

Sparkbar.defaultProps = {
  padding: false,
};

export default Sparkbar;
