import React, { Component } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Types } from '../PropTypes';
declare type BoxProps = {
    id?: string;
    title?: string;
    collapsable?: boolean;
    closable?: boolean;
    footer?: React.ReactNode | React.ReactNode[];
    type?: Types;
    options?: React.ReactNode | React.ReactNode[];
    icon?: IconProp;
    titleRight?: boolean;
    loaded?: boolean;
    noPadding?: boolean;
    badge?: React.ReactNode | React.ReactNode[];
    toolIcon?: IconProp;
    customOptions?: any;
    className?: string;
    footerClass?: string;
    collapsed?: boolean;
    solid?: boolean;
    textCenter?: boolean;
    padding?: boolean;
    bodyClassName?: string;
    border?: boolean;
    style?: any;
    header?: React.ReactNode | React.ReactNode[];
    children?: React.ReactNode | React.ReactNode[];
};
declare type BoxState = {
    collapsed?: boolean;
};
declare class Box extends Component<BoxProps, BoxState> {
    static defaultProps: {
        id: undefined;
        title: string;
        collapsable: boolean;
        closable: boolean;
        footer: null;
        type: null;
        options: null;
        icon: null;
        titleRight: boolean;
        loaded: boolean;
        noPadding: boolean;
        badge: null;
        toolIcon: string;
        customOptions: null;
        className: null;
        footerClass: null;
        collapsed: boolean;
        solid: boolean;
        textCenter: boolean;
        padding: boolean;
        bodyClassName: null;
        border: boolean;
        style: null;
        header: null;
        children: null;
    };
    constructor(props: BoxProps);
    componentDidMount(): void;
    main: HTMLDivElement | null;
    render(): JSX.Element;
}
export default Box;
//# sourceMappingURL=Box.d.ts.map