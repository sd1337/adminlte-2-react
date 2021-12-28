import React, { Component, ElementType, ReactElement } from 'react';

import RcSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
// import { GenericSliderProps } from 'rc-slider/lib/interface';
// import { SliderProps } from '@types/rc-slider';
// import { HandleProps } from 'rc-slider/lib/Handle';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import { Colors } from '../../PropTypes';
import './Slider.css';

const { Handle, Range } = RcSlider;

const trackStyle: React.CSSProperties = {
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

const handleStyle: React.CSSProperties = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: '#444',
  filter: 'none',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)',
  border: '0 solid transparent',
};

const handleStyleVertical: React.CSSProperties = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: '#444',
  filter: 'none',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05)',
  border: '0 solid transparent',
};

const railStyle: React.CSSProperties = {
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

interface HandleProps {
  prefixCls?: string;
  className?: string;
  vertical?: boolean;
  reverse?: boolean;
  offset?: number;
  style?: React.CSSProperties;
  disabled?: boolean;
  min?: number;
  max?: number;
  value?: number;
  tabIndex?: number;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaValueTextFormatter?: (val: number) => string;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

interface GenericSliderProps {
  min?: number;
  max?: number;
  step?: number | null;
  prefixCls?: string;
  vertical?: boolean;
  included?: boolean;
  disabled?: boolean;
  reverse?: boolean;
  trackStyle?: React.CSSProperties | React.CSSProperties[];
  handleStyle?: React.CSSProperties | React.CSSProperties[];
  autoFocus?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  className?: string;
  marks?: Record<number, React.ReactNode | { style?: React.CSSProperties; label?: string }>;
  dots?: boolean;
  maximumTrackStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  railStyle?: React.CSSProperties;
  dotStyle?: React.CSSProperties;
  activeDotStyle?: React.CSSProperties;
  draggableTrack?: boolean;
}

interface MySliderProps extends GenericSliderProps {
  color?: Colors,
  vertical?: boolean,
  defaultValue?: number | number[],
  value?: number | number[],
  // min?: number;
  // max?: number;
  // step?: number | null;
  rcSliderProps?: GenericSliderProps,
  onChange?: ((value: number) => void) | ((value: number[]) => void);
  onBeforeChange?: ((value: number) => void) | ((value: number[]) => void);
  onAfterChange?: ((value: number) => void) | ((value: number[]) => void);
  tooltipRender: Function,
  tooltipVisible: 'always' | 'dragging' | 'never',
  handle: (props: HandleProps) => ReactElement,
}

interface SliderState {

}

class Slider extends Component<MySliderProps, SliderState> {
  static defaultProps = {
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

  constructor(props: MySliderProps) {
    super(props);
    this.getHandle = this.getHandle.bind(this);
    this.constructElement = this.constructElement.bind(this);
    this.constructElement(props);
  }

  state = { };

  private static getTrackColor(color: string | undefined) {
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
    return trackColor;
  }

  getHandle = (props: HandleProps): ReactElement => {
    const {
      value, // dragging,
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
      // case 'dragging':
      //   actualVisible = dragging;
      //   break;
      default:
        break;
    }

    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={tooltipValue}
        visible={actualVisible}
        placement="top"
        // key={index}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  constructElement(props: MySliderProps) {
    const { value, defaultValue } = props;
    let Elem: ElementType;
    if ((value && (value as number[]).length) || (defaultValue && (defaultValue as number[]).length)) {
      Elem = (Range as any);
    } else {
      Elem = RcSlider;
    }
    this.Element = Elem;
  }

  Element: ElementType = RcSlider;

  render() {
    const {
      value, defaultValue, color, vertical,
      rcSliderProps, onChange, handle: rcSliderHandle,
      ...props
    } = this.props;
    const Elem = this.Element;
    let actualHandleStyle;
    let actualTrackStyle;
    let actualRailStyle;
    const trackColor = Slider.getTrackColor(color);
    if ((value && (value as number[]).length) || (defaultValue && (defaultValue as number[]).length)) {
      const maxValue = (value && (value as number[]).length) || (defaultValue && (defaultValue as number[]).length) || 0;
      if (!vertical) {
        actualRailStyle = railStyle;
        actualHandleStyle = [];
        actualTrackStyle = [];
        for (let i = 0; i < maxValue; ++i) {
          actualHandleStyle.push({ ...handleStyle });
          if (i < maxValue - 1) {
            actualTrackStyle.push({ backgroundColor: trackColor, ...trackStyle });
          }
        }
      } else {
        actualHandleStyle = [{ ...handleStyleVertical }];
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

    const {
      min, max, onAfterChange, onBeforeChange, step,
      autoFocus, onFocus, onBlur, className, style,
      trackStyle: propTrackStyle = actualTrackStyle,
      railStyle: propRailStyle = actualRailStyle,
      handleStyle: propHandleStyle = actualHandleStyle,
      reverse, disabled, prefixCls, marks, dots,
      maximumTrackStyle, dotStyle, activeDotStyle,
      draggableTrack,
    } = { ...props, ...rcSliderProps };
    return (
      <Elem
        min={min}
        max={max}
        step={step}
        prefixCls={prefixCls}
        vertical={vertical}
        disabled={disabled}
        reverse={reverse}
        trackStyle={propTrackStyle}
        handleStyle={propHandleStyle}
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        className={className}
        marks={marks}
        dots={dots}
        maximumTrackStyle={maximumTrackStyle}
        style={style}
        railStyle={propRailStyle}
        dotStyle={dotStyle}
        activeDotStyle={activeDotStyle}
        draggableTrack={draggableTrack}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
        handle={this.getHandle}
      />
    );
  }
}

export default Slider;
