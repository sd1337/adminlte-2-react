import React, { Component, FocusEventHandler, FormEventHandler } from 'react';
import { DatetimepickerProps } from 'react-datetime';
import { Moment } from 'moment';
import 'react-datetime/css/react-datetime.css';
import './DateTime.css';
import { InputWrapperProps } from './InputWrapper';
import { DateType } from './InputProps';
interface DateTimeProps extends InputWrapperProps {
    value?: DateType;
    defaultValue?: DateType;
    onChange?: FormEventHandler<any>;
    onBlur?: FocusEventHandler<any>;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    format?: string;
    timeFormat?: string;
    dateTimeProps?: DatetimepickerProps;
}
interface DateTimeState {
}
declare class DateTime extends Component<DateTimeProps, DateTimeState> {
    static defaultProps: DateTimeProps;
    state: DateTimeState;
    onChange: ((value: string | Moment) => void) | undefined;
    render(): React.JSX.Element;
}
export default DateTime;
//# sourceMappingURL=DateTime.d.ts.map