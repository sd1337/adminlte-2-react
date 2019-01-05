import React from 'react';
import PropTypes from 'prop-types';

import RcSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import { SliderColors } from '../../PropTypes';
import './Slider.css';

const { Handle } = RcSlider;

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

const Slider = ({
  value, onChange, onSlideStop, step, max, min, vertical, disabled,
  tipFormatter,
}) => (
  <RcSlider
    defaultValue={value}
    min={min}
    max={max}
    step={step}
    vertical={vertical}
    disabled={disabled}
    change={onChange}
    onAfterChange={onSlideStop}
    tipFormatter={tipFormatter}
    tipProps={{ visible: true }}
    handle={handle}
    trackStyle={{
      height: '100%',
      top: 0,
      bottom: 0,
      position: 'absolute',
      backgroundImage: 'linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%)',
      backgroundRepeat: 'repeat-x',
      boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.15)',
      boxSizing: 'border-box',
      borderRadius: '4px',
    }}
    handleStyle={{
      position: 'absolute',
      top: '2px',
      width: '20px',
      height: '20px',
      backgroundColor: '#337ab7',
      backgroundImage: 'linear-gradient(to bottom,#337ab7 0,#2e6da4 100%)',
      backgroundRepeat: 'repeat - x',
      filter: 'none',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)',
      border: '0 solid transparent',
    }}
    railStyle={{
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
      top: '50%',
      left: '0',
    }}
  />
);


Slider.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func,
  onSlideStop: PropTypes.func,
  step: PropTypes.number,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  vertical: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(SliderColors),
  tipFormatter: PropTypes.func,
  tipProps: PropTypes.shape({}),
};

Slider.defaultProps = {
  onChange: null,
  onSlideStop: null,
  step: 1,
  vertical: false,
  disabled: false,
  color: 'blue',
  tipFormatter: null,
  tipProps: null,
};

export default Slider;
