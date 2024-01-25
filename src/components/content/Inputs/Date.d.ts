import React, { Component, FormEventHandler, ReactNode } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePickerShape } from 'react-dates';
import { Moment } from 'moment';
import { InputWrapperProps } from './InputWrapper';
import './Date.scss';
import { Types } from '../../PropTypes';
import { DateType, SharedDateProps } from './InputProps';
interface DateProps extends SharedDateProps, InputWrapperProps {
    value: DateType;
    dateType: Types;
    defaultValue: DateType;
    onFocusChange?: Function;
    id?: string;
    name?: string;
    focused?: boolean;
    placeholder?: string;
    customCloseIcon?: ReactNode;
    showDefaultInputIcon?: boolean;
    customInputIcon?: ReactNode;
    dateProps?: SingleDatePickerShape;
    format?: string;
    onChange: FormEventHandler<any>;
}
interface DateState {
    focused: boolean;
    internalValue: Moment | null;
}
declare class Date extends Component<DateProps, DateState> {
    private static toMoment;
    static defaultProps: {
        value: null;
        defaultValue: undefined;
        onChange: undefined;
        onFocusChange: undefined;
        id: undefined;
        type: string;
        dateType: string;
        focused: boolean;
        placeholder: string;
        customCloseIcon: null;
        showDefaultInputIcon: boolean;
        customInputIcon: null;
        dateProps: null;
        name: string;
        format: undefined;
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
    constructor(props: DateProps);
    state: DateState;
    componentDidUpdate(): void;
    onChange(date: Moment | null): void;
    onFocusChange({ focused }: {
        focused: boolean;
    }): void;
    render(): React.JSX.Element;
}
export default Date;
//# sourceMappingURL=Date.d.ts.map