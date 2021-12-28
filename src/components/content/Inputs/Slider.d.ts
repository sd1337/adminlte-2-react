import { Component, ElementType, ReactElement } from 'react';
import { CommonApiProps, HandleProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { Colors } from '../../PropTypes';
import './Slider.css';
interface MySliderProps extends CommonApiProps {
    color?: Colors;
    vertical?: boolean;
    defaultValue?: number | number[];
    value?: number | number[];
    rcSliderProps?: CommonApiProps;
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
    getHandle: (props: HandleProps) => JSX.Element;
    constructElement(props: MySliderProps): void;
    Element: ElementType;
    render(): JSX.Element;
}
export default Slider;
//# sourceMappingURL=Slider.d.ts.map