/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import RcSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import { Colors } from '../../PropTypes';
import './Slider.css';

const { Handle, Range } = RcSlider;

const handle = (props) => {
  const {
    value, dragging, index, ...restProps
  } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}

    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const trackStyle = {
  height: '10px',
  top: '5px',
  bottom: 0,
  position: 'absolute',
  //backgroundColor: '#932ab6',
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

const Slider = ({
  value, defaultValue, color, vertical, ...props
}) => {
  let Elem = null;
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
    Elem = Range;
    let maxValue = (value && value.length) || (defaultValue && defaultValue.length);
    if (!vertical) {
      actualRailStyle = railStyle;
      actualHandleStyle = [];
      actualTrackStyle = [];
      for (let i = 0; i < maxValue; ++i) {
        actualHandleStyle.push({ ...handleStyle});
        if (i < maxValue - 1) {
          actualTrackStyle.push({ backgroundColor: trackColor, ...trackStyle });
        }
      }
    } else {
      actualHandleStyle = [];
      for (let i = 0; i < maxValue; ++i) {
        actualHandleStyle.push(handleStyle);
      }
    }
  } else {
    Elem = RcSlider;
    if (!vertical) {
      actualHandleStyle = {top: '0px', ...handleStyle};
      actualRailStyle = railStyle;
      actualTrackStyle = { backgroundColor: trackColor, ...trackStyle };
    } else {
      actualHandleStyle = handleStyle;
      actualTrackStyle = undefined;
      actualRailStyle = undefined;
    }
  }


  return (
    <Elem
      defaultValue={defaultValue}
      //value={value}
      handle={handle}
      trackStyle={actualTrackStyle}
      handleStyle={actualHandleStyle}
      railStyle={actualRailStyle}
      {...{ vertical, ...props }}
    />);
};


Slider.propTypes = {
  color: PropTypes.oneOf(Colors),
  vertical: PropTypes.bool,
  value: PropTypes.any,
};

Slider.defaultProps = {
  color: 'light-blue',
  vertical: false,
  value: undefined
};

export default Slider;
