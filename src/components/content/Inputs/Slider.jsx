import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import PropTypes from 'prop-types';

import { SliderColors } from '../../PropTypes';
import './Slider.css';

class Slider extends Component {
  componentDidMount() {
    const $element = this.main.mySlider.$sliderElem;
    // $element.addClass('form-control');
    const { color } = this.props;
    if (color) {
      $element.addClass(`color-${color}`);
    }
  }

  render() {
    const {
      value, onChange, onSlideStop, step, max, min, vertical, reversed, disabled,
    } = this.props;
    return (
      <ReactBootstrapSlider
        ref={(c) => { this.main = c; }}
        className="slider form-control"
        value={value}
        change={onChange}
        slideStop={onSlideStop}
        step={step}
        max={max}
        min={min}
        orientation={vertical ? 'vertical' : ''}
        reversed={reversed}
        disabled={disabled ? 'disabled' : ''}
      />
    );
  }
}

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
  reversed: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(SliderColors),
};

Slider.defaultProps = {
  onChange: null,
  onSlideStop: null,
  step: 1,
  vertical: false,
  reversed: false,
  disabled: false,
  color: null,
};

export default Slider;
