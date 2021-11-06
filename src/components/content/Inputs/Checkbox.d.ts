import { Component } from 'react';
import { IInputProps } from './InputProps';
interface CheckboxProps extends IInputProps {
    text: string;
    checked?: boolean;
    disabled: boolean;
    name: string;
    value?: string | number;
    defaultvalue: string | number;
}
interface CheckboxState {
}
declare class Checkbox extends Component<CheckboxProps, CheckboxState> {
    static defaultProps: {
        text: null;
        checked: null;
        onChange: null;
        disabled: boolean;
        name: null;
        value: null;
    };
    state: {};
    render(): JSX.Element;
}
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map