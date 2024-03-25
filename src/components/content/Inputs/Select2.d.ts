import React, { Component } from 'react';
import 'select2';
import 'select2/dist/css/select2.css';
import './Select2.css';
import { InputWrapperProps } from './InputWrapper';
import { SelectOptionType } from './InputProps';
import { Dictionary } from '../../PropTypes';
interface Select2Props extends InputWrapperProps {
    id?: string;
    placeholder?: string;
    multiple?: boolean;
    options: SelectOptionType[];
    value: any;
    defaultValue: any;
    disabled?: boolean;
    defaultWidgetOptions: any;
    select2Options: any;
    name?: string;
    allowClear?: boolean;
    onChange?: Function;
    onBeforeClose?: Function;
    onClose?: Function;
    onBeforeOpening?: Function;
    onOpen?: Function;
    onBeforeSelect?: Function;
    onSelect?: Function;
    onBeforeUnselect?: Function;
    onUnselect?: Function;
    onFetchData?: Function;
    fetchDataDelay?: number;
}
interface Select2State {
}
declare class Select2 extends Component<Select2Props, Select2State> {
    static defaultProps: {
        id: null;
        placeholder: string;
        multiple: boolean;
        options: never[];
        value: null;
        defaultValue: null;
        disabled: boolean;
        defaultWidgetOptions: {};
        select2Options: {};
        name: null;
        allowClear: boolean;
        onChange: null;
        onBeforeClose: null;
        onClose: null;
        onBeforeOpening: null;
        onOpen: null;
        onBeforeSelect: null;
        onSelect: null;
        onBeforeUnselect: null;
        onUnselect: null;
        onFetchData: undefined;
        fetchDataDelay: number;
    };
    constructor(props: Select2Props);
    componentDidMount(): void;
    shouldComponentUpdate({ options, value, disabled, ...props }: Select2Props): boolean;
    componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }: Select2Props): void;
    componentWillUnmount(): void;
    handleSelect(): void;
    getValue: (select2Options: any, multiple: any) => any;
    optionsFromSelect2: (select2Options: any) => any;
    optionsToSelect2: (scopedOptions: any) => any;
    singleOptionToSelect2: (p: any) => any;
    domRef: HTMLSelectElement | null;
    boundHandlers: Dictionary;
    internalOptions: never[];
    actualOptions: never[];
    $ref?: any;
    mapped?: Dictionary;
    mapOptions(options: any): void;
    toJQueryEvent(eventName: string): string | null;
    render(): React.JSX.Element;
}
export default Select2;
//# sourceMappingURL=Select2.d.ts.map