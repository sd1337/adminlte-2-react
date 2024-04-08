import React, { Component, FormEventHandler } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePickerShape } from 'react-dates';
import { Moment } from 'moment';
import { InputWrapperProps } from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { DateType, SharedDateProps } from './InputProps';
type Focused = 'startDate' | 'endDate';
interface DateRangeProps extends SharedDateProps, InputWrapperProps {
    dateType: Types;
    startDate: DateType;
    endDate: DateType;
    startDateId: string;
    endDateId: string;
    onStartChange: FormEventHandler<any>;
    onEndChange: FormEventHandler<any>;
    focused: Focused;
    onFocusChange: Function;
    format: string;
    dateRangeProps: DateRangePickerShape;
}
interface DateRangeState {
    focused: Focused | null;
    startDate: Moment | null;
    endDate: Moment | null;
}
declare class DateRange extends Component<DateRangeProps, DateRangeState> {
    static defaultProps: {
        type: string;
        focused: null;
        onFocusChange: null;
        format: undefined;
        dateRangeProps: null;
        disabled: boolean;
        required: boolean;
        readOnly: boolean;
        showClearDate: boolean;
        noBorder: boolean;
        block: boolean;
        small: boolean;
        regular: boolean;
        inputIconPosition: null;
    };
    constructor(props: DateRangeProps);
    state: DateRangeState;
    onChange({ startDate, endDate }: {
        startDate: Moment | null;
        endDate: Moment | null;
    }): void;
    onFocusChange(focused: Focused | null): void;
    render(): React.JSX.Element;
}
export default DateRange;
//# sourceMappingURL=DateRange.d.ts.map