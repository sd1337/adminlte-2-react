import React, { Component, MouseEventHandler, ReactElement, ReactNode } from 'react';
import './Button.css';
import { Colors, Sizes, Types } from '../PropTypes';
interface ButtonProps {
    id?: string;
    size?: Sizes;
    type?: Types;
    block?: boolean;
    icon?: string;
    color?: Colors;
    className?: string;
    flat?: boolean;
    text?: string;
    alignRight?: boolean;
    pullRight?: boolean;
    pullLeft?: boolean;
    disabled?: boolean;
    margin?: boolean;
    to?: string;
    app?: boolean;
    outline?: boolean;
    badge: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    split?: boolean;
    children?: ReactElement | ReactElement[];
    value?: string | number;
    name?: string;
}
declare class Button extends Component<ButtonProps, {}> {
    static defaultProps: {
        id: null;
        size: null;
        type: string;
        block: boolean;
        icon: null;
        color: null;
        className: null;
        flat: boolean;
        text: null;
        alignRight: boolean;
        pullRight: boolean;
        pullLeft: boolean;
        disabled: boolean;
        margin: boolean;
        to: null;
        app: null;
        outline: null;
        badge: null;
        onClick: null;
        split: null;
        children: null;
        value: null;
        name: null;
    };
    render(): React.JSX.Element;
}
export default Button;
//# sourceMappingURL=Button.d.ts.map