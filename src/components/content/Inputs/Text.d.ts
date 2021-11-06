import { Component } from 'react';
import { IInputProps } from './InputProps';
interface TextProps extends IInputProps {
    inputType?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    rows?: number;
}
interface TextState {
}
declare class Text extends Component<TextProps, TextState> {
    defaultProps: {
        inputType: string;
        name: null;
        id: null;
        placeholder: null;
        value: undefined;
        disabled: boolean;
        rows: null;
        onBlur: null;
        onChange: null;
        onFocus: null;
        onSelect: null;
        onKeyDown: null;
        onKeyUp: null;
        onKeyPress: null;
        size: null;
    };
    state: {};
    ref: HTMLInputElement | HTMLTextAreaElement | null;
    render(): JSX.Element;
}
export default Text;
//# sourceMappingURL=Text.d.ts.map