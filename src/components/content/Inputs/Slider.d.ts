import React, { Component, ElementType, ReactElement } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { Colors } from '../../PropTypes';
import './Slider.css';
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
    marks?: Record<number, React.ReactNode | {
        style?: React.CSSProperties;
        label?: string;
    }>;
    dots?: boolean;
    maximumTrackStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    railStyle?: React.CSSProperties;
    dotStyle?: React.CSSProperties;
    activeDotStyle?: React.CSSProperties;
    draggableTrack?: boolean;
}
interface MySliderProps extends GenericSliderProps {
    color?: Colors;
    vertical?: boolean;
    defaultValue?: number | number[];
    value?: number | number[];
    rcSliderProps?: GenericSliderProps;
    onChange?: ((value: number) => void) | ((value: number[]) => void);
    onBeforeChange?: ((value: number) => void) | ((value: number[]) => void);
    onAfterChange?: ((value: number) => void) | ((value: number[]) => void);
    tooltipRender: Function;
    tooltipVisible: 'always' | 'dragging' | 'never';
    handle: (props: HandleProps) => ReactElement;
}
interface SliderState {
}
declare class Slider extends Component<MySliderProps, SliderState> {
    static defaultProps: {
        color: string;
        vertical: boolean;
        value: undefined;
        defaultValue: undefined;
        rcSliderProps: undefined;
        onChange: undefined;
        tooltipRender: undefined;
        tooltipVisible: string;
        handle: undefined;
    };
    constructor(props: MySliderProps);
    state: {};
    private static getTrackColor;
    getHandle: (props: HandleProps) => ReactElement;
    constructElement(props: MySliderProps): void;
    Element: ElementType;
    render(): JSX.Element;
}
export default Slider;
//# sourceMappingURL=Slider.d.ts.map