import { Component } from 'react';
import { IInputProps, SelectOptionType } from './InputProps';
interface SelectProps extends IInputProps {
    options: SelectOptionType[];
    label: string;
    disabled: boolean;
    multiple: boolean;
}
interface SelectState {
}
declare class Select extends Component<SelectProps, SelectState> {
    state: SelectState;
    mapOptions: (options: SelectOptionType[]) => ({
        value: string;
        text: string;
        disabled: boolean;
    } | {
        value: never;
        text: never;
        disabled?: undefined;
    })[];
    mapSingleOption: (p: SelectOptionType) => {
        value: string;
        text: string;
        disabled: boolean;
    } | {
        value: never;
        text: never;
        disabled?: undefined;
    };
    render(): JSX.Element;
}
export default Select;
//# sourceMappingURL=Select.d.ts.map