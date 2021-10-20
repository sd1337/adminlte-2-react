import React, { Component, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Sizes, Types } from './PropTypes';
interface ContentProps extends RouteComponentProps {
    title?: string;
    subTitle?: string;
    homeRoute?: string;
    modal?: boolean;
    modalCloseTo?: string;
    show?: boolean;
    modalFooter?: ReactNode;
    browserTitle?: string;
    onHide?: Function;
    modalSize?: Sizes;
    modalType?: Types;
    modalCloseButton?: boolean;
}
declare class Content extends Component<ContentProps, {}> {
    static defaultProps: {
        title: undefined;
        subTitle: undefined;
        homeRoute: string;
        modal: boolean;
        modalCloseTo: undefined;
        show: boolean;
        modalFooter: undefined;
        browserTitle: undefined;
        history: undefined;
        onHide: undefined;
        modalSize: undefined;
        modalType: undefined;
        modalCloseButton: boolean;
    };
    componentDidMount(): void;
    isModal(): boolean | undefined;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<ContentProps, "title" | "browserTitle" | "subTitle" | "homeRoute" | "modal" | "modalCloseTo" | "show" | "modalFooter" | "onHide" | "modalSize" | "modalType" | "modalCloseButton">, any> & import("react-router").WithRouterStatics<typeof Content>;
export default _default;
//# sourceMappingURL=Content.d.ts.map