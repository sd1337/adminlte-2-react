import React, { Component, ReactElement } from 'react';
import 'icheck';
import 'icheck/skins/all.css';
import { InputWrapperProps } from './InputWrapper';
import { CombinedOptionType, ICheckRadioOptionType } from './InputProps';
import { Dictionary } from '../../PropTypes';
interface ICheckProps extends InputWrapperProps {
    options: CombinedOptionType[] | CombinedOptionType;
    name?: string;
    disabled?: boolean;
    value?: any;
    defaultValue: any;
    onChange: Function;
}
interface ICheckState {
    internalValue?: any;
    options?: ReactElement[];
}
declare class ICheck extends Component<ICheckProps, ICheckState> {
    static defaultProps: {
        options: string[];
        name: string;
        disabled: boolean;
        value: undefined;
        defaultValue: undefined;
        onChange: null;
    };
    constructor(props: ICheckProps);
    state: ICheckState;
    componentDidMount(): void;
    componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }: ICheckProps): void;
    componentWillUnmount(): void;
    onChange(e: any): void;
    ref: Dictionary;
    $ref: any;
    mapAllOptions: (options: CombinedOptionType | CombinedOptionType[]) => ReactElement[];
    mapOptions: (options: CombinedOptionType | CombinedOptionType[]) => ICheckRadioOptionType[];
    mapSingleOption: (p: CombinedOptionType) => ICheckRadioOptionType;
    optionToJSXComponent: ({ value, text, disabled, checked, }: ICheckRadioOptionType, idx: number) => ReactElement;
    updateOptions(): void;
    initializeICheck(): void;
    render(): React.JSX.Element;
}
export default ICheck;
//# sourceMappingURL=ICheck.d.ts.map