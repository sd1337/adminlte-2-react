import { Component, ElementType, ReactElement } from 'react';
import { GenericSliderProps } from 'rc-slider/lib/interface';
import { HandleProps } from 'rc-slider/lib/Handle';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { Colors } from '../../PropTypes';
import './Slider.css';
interface SliderProps extends GenericSliderProps {
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
declare class Slider extends Component<SliderProps, SliderState> {
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
    constructor(props: SliderProps);
    state: {};
    private static getTrackColor;
    getHandle: (props: HandleProps) => JSX.Element;
    constructElement(props: SliderProps): void;
    Element: ElementType;
    render(): JSX.Element;
}
export default Slider;
//# sourceMappingURL=Slider.d.ts.map