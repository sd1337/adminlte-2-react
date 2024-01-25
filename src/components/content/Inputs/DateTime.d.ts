import React, { FormEventHandler } from 'react';
import { DatetimepickerProps, EventOrValueHandler } from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTime.css';
import { InputWrapperProps } from './InputWrapper';
import { DateType } from './InputProps';
interface DateTimeProps extends InputWrapperProps {
    value?: DateType;
    defaultValue?: DateType;
    onChange?: FormEventHandler<any>;
    onClose?: EventOrValueHandler<any>;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    format?: string;
    dateFormat?: string;
    timeFormat?: string;
    dateTimeProps?: DatetimepickerProps;
}
declare const DateTime: (props: DateTimeProps) => React.JSX.Element;
export default DateTime;
//# sourceMappingURL=DateTime.d.ts.map