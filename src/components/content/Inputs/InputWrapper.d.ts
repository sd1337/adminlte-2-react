import React, { Component, ReactNode } from 'react';
import { LabelProps } from './Label';
import { Sizes } from '../../PropTypes';
export interface InputWrapperProps extends LabelProps {
    iconLeft?: string;
    iconRight?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: Sizes;
    checkboxLeft?: boolean;
    checkboxLeftProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    checkboxRight?: boolean;
    checkboxRightProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    radioLeft?: boolean;
    radioLeftProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    radioRight?: boolean;
    radioRightProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    buttonLeft?: ReactNode;
    buttonRight?: ReactNode;
    children?: ReactNode;
    width?: string;
    help?: string;
}
interface InputWrapperState {
}
declare class InputWrapper extends Component<InputWrapperProps, InputWrapperState> {
    static defaultProps: {
        iconLeft: null;
        iconRight: null;
        addonLeft: null;
        addonRight: null;
        size: null;
        checkboxLeft: boolean;
        checkboxLeftProps: null;
        checkboxRight: boolean;
        checkboxRightProps: null;
        radioLeft: boolean;
        radioLeftProps: null;
        radioRight: boolean;
        radioRightProps: null;
        buttonLeft: null;
        buttonRight: null;
        width: string;
        help: null;
    };
    state: {};
    render(): React.JSX.Element;
}
export default InputWrapper;
//# sourceMappingURL=InputWrapper.d.ts.map