import React, { Component } from 'react';

const $ = require('jquery');
require('jquery-sparkline');

interface SparkbarProps {
  color: string,
  height?: string | number,
  data: number[],
  padding?: boolean
}

interface SparkbarState {

}

class Sparkbar extends Component<SparkbarProps, SparkbarState> {
  static defaultProps = {
    height: 30,
    padding: false,
  };

  componentDidMount() {
    const { color, height = 30 } = this.props;
    const elem = $(this.main);
    elem.sparkline('html', {
      type: 'bar',
      height,
      barColor: color,
    });
  }

  main: HTMLDivElement | null = null;

  render() {
    const { data, padding } = this.props;
    const classes = ['sparkpad',
      padding ? 'pad' : ''].join(' ');
    return (<div className={classes} ref={(c) => { this.main = c; }}>{data.join(',')}</div>);
  }
}

export default Sparkbar;
