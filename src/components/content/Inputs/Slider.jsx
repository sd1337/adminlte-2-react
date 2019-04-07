import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RcSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import { Colors } from '../../PropTypes';
import './Slider.css';

const { Handle, Range } = RcSlider;

const trackStyle = {
  height: '10px',
  top: '5px',
  bottom: 0,
  position: 'absolute',
  // backgroundColor: '#932ab6',
  // backgroundImage: 'linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%)',
  backgroundRepeat: 'repeat-x',
  boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.15)',
  boxSizing: 'border-box',
  borderRadius: '4px',
};

const handleStyle = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: '#444',
  filter: 'none',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)',
  border: '0 solid transparent',
};

const handleStyleVertical = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: '#444',
  filter: 'none',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)',
  border: '0 solid transparent',
};

const railStyle = {
  position: 'absolute',
  cursor: 'pointer',
  backgroundImage: 'linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%)',
  backgroundRepeat: 'repeat-x',
  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#fff5f5f5\',endColorstr=\'#fff9f9f9\',GradientType=0)',
  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
  borderRadius: '4px',
  height: '10px',
  width: '100%',
  marginTop: '-5px',
  top: '9px',
  left: '0',
};

class Slider extends Component {
  state = { }

  constructor(props) {
    super(props);
    this.getHandle = this.getHandle.bind(this);
    this.constructElement = this.constructElement.bind(this);
    this.constructElement(props);
  }

  getHandle = (props) => {
    const {
      value, dragging, index,
      ...restProps
    } = props;
    const { tooltipRender, tooltipVisible, handle } = this.props;
    if (handle) {
      return handle(props);
    }
    let tooltipValue;
    if (tooltipRender) {
      tooltipValue = tooltipRender(value);
    } else {
      tooltipValue = value;
    }

    let actualVisible;
    switch (tooltipVisible) {
      case 'always':
        actualVisible = true;
        break;
      case 'never':
        actualVisible = false;
        break;
      case 'dragging':
        actualVisible = dragging;
        break;
      default:
        break;
    }

    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={tooltipValue}
        visible={actualVisible}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  constructElement(props) {
    const { value, defaultValue } = props;
    let Elem;
    if ((value && value.length) || (defaultValue && defaultValue.length)) {
      Elem = Range;
    } else {
      Elem = RcSlider;
    }
    this.Element = Elem;
  }

  render() {
    const {
      value, defaultValue, color, vertical,
      rcSliderProps, onChange,
      ...props
    } = this.props;
    const Elem = this.Element;
    let actualHandleStyle;
    let actualTrackStyle;
    let actualRailStyle;
    let trackColor;
    switch (color) {
      case 'light-blue':
        trackColor = '#357ca5';
        break;
      case 'aqua':
        trackColor = '#00c0ef';
        break;
      case 'green':
        trackColor = '#00a65a';
        break;
      case 'yellow':
        trackColor = '#f39c12';
        break;
      case 'red':
        trackColor = '#d33724';
        break;
      case 'gray':
        trackColor = '#d2d6de';
        break;
      case 'navy':
        trackColor = '#001a35';
        break;
      case 'teal':
        trackColor = '#39CCCC';
        break;
      case 'purple':
        trackColor = '#605ca8';
        break;
      case 'orange':
        trackColor = '#ff851b';
        break;
      case 'maroon':
        trackColor = '#D81B60';
        break;
      case 'black':
        trackColor = '#111111';
        break;
      default:
        break;
    }
    if ((value && value.length) || (defaultValue && defaultValue.length)) {
      const maxValue = (value && value.length) || (defaultValue && defaultValue.length);
      if (!vertical) {
        actualRailStyle = railStyle;
        actualHandleStyle = [];
        actualTrackStyle = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < maxValue; ++i) {
          actualHandleStyle.push({ ...handleStyle });
          if (i < maxValue - 1) {
            actualTrackStyle.push({ backgroundColor: trackColor, ...trackStyle });
          }
        }
      } else {
        actualHandleStyle = [{ ...handleStyleVertical }];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < maxValue; ++i) {
          actualHandleStyle.push(handleStyle);
        }
      }
    } else if (!vertical) {
      actualHandleStyle = { ...handleStyle };
      actualRailStyle = railStyle;
      actualTrackStyle = { backgroundColor: trackColor, ...trackStyle };
    } else {
      actualHandleStyle = handleStyle;
      actualTrackStyle = undefined;
      actualRailStyle = undefined;
    }

    let additionalProps = { vertical, ...props };
    if (value) {
      additionalProps = { value, ...additionalProps };
    }
    return (
      <Elem
        defaultValue={defaultValue}
        handle={this.getHandle}
        trackStyle={actualTrackStyle}
        handleStyle={actualHandleStyle}
        railStyle={actualRailStyle}
        onChange={onChange}
        {...additionalProps}
      />
    );
  }
}


Slider.propTypes = {
  color: PropTypes.oneOf(Colors),
  vertical: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  rcSliderProps: PropTypes.shape({}),
  onChange: PropTypes.func,
  tooltipRender: PropTypes.func,
  tooltipVisible: PropTypes.oneOf(['always', 'dragging', 'never']),
  handle: PropTypes.element,
};

Slider.defaultProps = {
  color: 'light-blue',
  vertical: false,
  value: undefined,
  defaultValue: undefined,
  rcSliderProps: undefined,
  onChange: undefined,
  tooltipRender: undefined,
  tooltipVisible: 'dragging',
  handle: undefined,
};

export default Slider;
