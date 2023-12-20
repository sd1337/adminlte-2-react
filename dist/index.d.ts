/// <reference types="react" />

import { AnimationEventHandler } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { ChangeEventHandler } from 'react';
import { ClipboardEventHandler } from 'react';
import { Col } from 'react-bootstrap';
import { Component } from 'react';
import { ComponentClass } from 'react';
import { CompositionEventHandler } from 'react';
import { DateRangePickerShape } from 'react-dates';
import { DatetimepickerProps } from 'react-datetime';
import { DragEventHandler } from 'react';
import { ElementType } from 'react';
import { FocusEventHandler } from 'react';
import { FormEventHandler } from 'react';
import { KeyboardEventHandler } from 'react';
import { Moment } from 'moment';
import * as MomentNS from 'moment';
import { MouseEventHandler } from 'react';
import { PointerEventHandler } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactEventHandler } from 'react';
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { SingleDatePickerShape } from 'react-dates';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { TouchEventHandler } from 'react';
import { TransitionEventHandler } from 'react';
import { UIEventHandler } from 'react';
import { WheelEventHandler } from 'react';
import { WithRouterStatics } from 'react-router';

declare class AdminLTE extends Component<Props, {}> {
    static defaultProps: {
        children: null;
        title: string[];
        titleShort: string[];
        browserTitle: null;
        theme: string;
        footer: null;
        sidebar: undefined;
        homeTo: string;
        searchbarFilter: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default AdminLTE;

export declare class Alert extends Component<Props_5, State_3> {
    static defaultProps: {
        id: undefined;
        closable: boolean;
        onDismiss: null;
        type: null;
        icon: null;
        title: null;
        children: null;
    };
    constructor(props: Props_5);
    onDismiss(): void;
    render(): false | JSX.Element;
}

export declare function AsyncComponent(importComponent: Function): any;

export declare const Badge: BadgeComponent;

declare type BadgeComponent = React_2.FC<BadgeProps>;

declare interface BadgeProps {
    id?: string;
    color: Colors_2;
    text?: string;
}

export declare class Box extends Component<BoxProps, BoxState> {
    static defaultProps: {
        id: undefined;
        title: string;
        collapsable: boolean;
        closable: boolean;
        footer: null;
        type: null;
        options: null;
        icon: undefined;
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
    close: MouseEventHandler<HTMLButtonElement>;
    toggleHide: MouseEventHandler<HTMLButtonElement>;
    main: HTMLDivElement | null;
    render(): JSX.Element;
}

export declare const BoxPane: BoxPaneComponent;

declare type BoxPaneComponent = React_2.FC<BoxPaneProps>;

declare interface BoxPaneProps {
    children: ReactNode;
    color: Colors_2;
    side?: string;
    padding?: boolean;
}

declare type BoxProps = {
    id?: string;
    title?: string;
    collapsable?: boolean;
    closable?: boolean;
    footer?: ReactNode;
    type?: Types_2;
    options?: ReactNode;
    icon?: string;
    titleRight?: boolean;
    loaded?: boolean;
    noPadding?: boolean;
    badge?: ReactNode;
    toolIcon?: string;
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
    header?: ReactNode;
    children?: ReactNode;
};

declare type BoxState = {
    collapsed?: boolean;
    closing: boolean;
    closed: boolean;
};

export declare class Button extends Component<ButtonProps, {}> {
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
    render(): JSX.Element;
}

export declare const ButtonGroup: ButtonGroupComponent;

declare type ButtonGroupComponent = React_2.FC<ButtonGroupProps>;

declare interface ButtonGroupProps {
    pullRight?: boolean;
    margin?: boolean;
    vertical?: boolean;
    children: ReactNode;
}

declare interface ButtonProps {
    id?: string;
    size?: Sizes_2;
    type?: Types_2;
    block?: boolean;
    icon?: string;
    color?: Colors_2;
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

export { ButtonToolbar }

export declare class Calendar extends Component<CalendarProps, CalendarState> {
    state: CalendarState;
    render(): JSX.Element;
}

declare interface CalendarProps {
}

declare interface CalendarState {
}

export declare const Callout: CalloutComponent;

declare type CalloutComponent = React_2.FC<CalloutProps>;

declare interface CalloutProps {
    id?: string;
    title?: string;
    children?: ReactNode;
    type?: Types_2;
}

export declare class Chatbox extends Component<ChatboxProps, ChatboxState> {
    static defaultProps: {
        id: undefined;
        type: null;
        badgeColor: null;
        contactsTitle: string;
        iconClass: null;
        title: null;
        titleRight: boolean;
        collapsable: boolean;
        closable: boolean;
        async: boolean;
        loaded: boolean;
        noPadding: boolean;
    };
    getMessage({ message, timestamp, user }: {
        message: string;
        timestamp: string;
        user: string;
    }, users: any): JSX.Element;
    getMessages(): JSX.Element;
    getFooter(): JSX.Element;
    getBadge(): JSX.Element;
    getContactsToggle(): JSX.Element;
    getContact({ name, image, lastTimestamp, lastMessage, to, }: any): JSX.Element;
    getContacts(): JSX.Element;
    activeUsers: {
        one: {
            name: string;
            image: string;
            side: string;
        };
        two: {
            name: string;
            image: string;
            side: string;
        };
    };
    messages: {
        message: string;
        timestamp: string;
        user: string;
    }[];
    contacts: {
        name: string;
        image: string;
        lastTimestamp: string;
        lastMessage: string;
    }[];
    render(): JSX.Element;
}

declare interface ChatboxProps {
    id?: string;
    type?: Types_2;
    badgeColor?: Colors_2;
    contactsTitle?: string;
    iconClass?: string;
    title?: string;
    titleRight?: boolean;
    collapsable?: boolean;
    closable?: boolean;
    async?: boolean;
    loaded?: boolean;
    noPadding?: boolean;
}

declare interface ChatboxState {
}

declare class Checkbox extends Component<CheckboxProps, CheckboxState> {
    static defaultProps: {
        text: null;
        onChange: null;
        disabled: boolean;
        name: null;
    };
    state: {};
    render(): JSX.Element;
}

declare interface CheckboxProps extends IInputProps {
    text: string;
    checked?: boolean;
    disabled: boolean;
    name: string;
    value?: string | number;
    defaultValue: string | number;
}

declare interface CheckboxState {
}

export { Col }

export declare type Colors = Colors_2;

declare type Colors_2 = 'light-blue' | 'aqua' | 'green' | 'yellow' | 'red' | 'gray' | 'navy' | 'teal' | 'purple' | 'orange' | 'maroon' | 'black';

declare type ColSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

declare type ColumnType = {
    title: string;
    data: string;
    width?: string;
    render?: (data: any, rowData: DataType, rowIdx: number) => ReactElement;
};

export declare const Content: ComponentClass<Pick<ContentProps, "title" | "browserTitle" | "subTitle" | "homeRoute" | "modal" | "modalCloseTo" | "show" | "modalFooter" | "onHide" | "modalSize" | "modalType" | "modalCloseButton">, any> & WithRouterStatics<typeof Content_2>;

declare class Content_2 extends Component<ContentProps, {}> {
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

declare interface ContentProps extends RouteComponentProps {
    title?: string;
    subTitle?: string;
    homeRoute?: string;
    modal?: boolean;
    modalCloseTo?: string;
    show?: boolean;
    modalFooter?: ReactNode;
    browserTitle?: string;
    onHide?: Function;
    modalSize?: ReactBootstrap.Sizes;
    modalType?: Types_2;
    modalCloseButton?: boolean;
}

export declare class ControlSidebar extends Component<Props_3, State> {
    state: {};
    render(): JSX.Element;
}

declare class ControlSidebarEntry extends Component<Props_4, State_2> {
    state: {};
    render(): JSX.Element;
}

declare type DataType = {
    [key: string]: any;
};

declare class Date_2 extends Component<DateProps, DateState> {
    private static toMoment;
    static defaultProps: {
        disabled: boolean;
        required: boolean;
        readOnly: boolean;
        showClearDate: boolean;
        noBorder: boolean;
        block: boolean;
        small: boolean;
        regular: boolean;
        inputIconPosition: null;
        value: null;
        defaultValue: undefined;
        onChange: undefined;
        onFocusChange: undefined;
        id: undefined;
        type: string;
        dateType: string;
        focused: boolean;
        placeholder: string;
        customCloseIcon: null;
        showDefaultInputIcon: boolean;
        customInputIcon: null;
        dateProps: null;
        name: string;
        format: undefined;
    };
    constructor(props: DateProps);
    state: DateState;
    componentDidUpdate(): void;
    onChange(date: Moment | null): void;
    onFocusChange({ focused }: {
        focused: boolean;
    }): void;
    render(): JSX.Element;
}

declare interface DateProps extends SharedDateProps, InputWrapperProps {
    value: DateType;
    dateType: Types_2;
    defaultValue: DateType;
    onFocusChange?: Function;
    id?: string;
    name?: string;
    focused?: boolean;
    placeholder?: string;
    customCloseIcon?: ReactNode;
    showDefaultInputIcon?: boolean;
    customInputIcon?: ReactNode;
    dateProps?: SingleDatePickerShape;
    format?: string;
    onChange: FormEventHandler<any>;
}

declare class DateRange extends Component<DateRangeProps, DateRangeState> {
    static defaultProps: {
        disabled: boolean;
        required: boolean;
        readOnly: boolean;
        showClearDate: boolean;
        noBorder: boolean;
        block: boolean;
        small: boolean;
        regular: boolean;
        inputIconPosition: null;
        type: string;
        focused: null;
        onFocusChange: null;
        format: undefined;
        dateRangeProps: null;
    };
    constructor(props: DateRangeProps);
    state: DateRangeState;
    onChange({ startDate, endDate }: {
        startDate: Moment | null;
        endDate: Moment | null;
    }): void;
    onFocusChange(focused: Focused | null): void;
    render(): JSX.Element;
}

declare interface DateRangeProps extends SharedDateProps, InputWrapperProps {
    dateType: Types_2;
    startDate: DateType;
    endDate: DateType;
    startDateId: string;
    endDateId: string;
    onStartChange: FormEventHandler<any>;
    onEndChange: FormEventHandler<any>;
    focused: Focused;
    onFocusChange: Function;
    format: string;
    dateRangeProps: DateRangePickerShape;
}

declare interface DateRangeState {
    focused: Focused | null;
    startDate: Moment | null;
    endDate: Moment | null;
}

declare interface DateState {
    focused: boolean;
    internalValue: Moment | null;
}

declare class DateTime extends Component<DateTimeProps, DateTimeState> {
    static defaultProps: DateTimeProps;
    state: DateTimeState;
    onChange: ((value: string | Moment) => void) | undefined;
    render(): JSX.Element;
}

declare interface DateTimeProps extends InputWrapperProps {
    value?: DateType;
    defaultValue?: DateType;
    onChange?: FormEventHandler<any>;
    onBlur?: FocusEventHandler<any>;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    format?: string;
    timeFormat?: string;
    dateTimeProps?: DatetimepickerProps;
}

declare interface DateTimeState {
}

declare type DateType = Moment | string;

declare const _default: React_2.ComponentClass<Pick<ItemProps, "text" | "activeOn" | "id" | "icon" | "labels" | "color" | "children" | "to" | "highlighted">, any> & WithRouterStatics<ItemComponent>;

export declare const Description: DescriptionComponent;

export declare const DescriptionBlock: DescriptionBlockComponent;

declare type DescriptionBlockComponent = React_2.FC<DescriptionBlockProps>;

declare interface DescriptionBlockProps {
    id?: string;
    percentage: number;
    percentageColor: Colors_2;
    header: string;
    text: string;
    indication: 'left' | 'right' | 'up' | 'down';
}

declare type DescriptionComponent = React_2.FC<DescriptionProps>;

export declare const DescriptionItem: DescriptionItemComponent;

declare type DescriptionItemComponent = React_2.FC<DescriptionItemProps>;

declare interface DescriptionItemProps {
    text?: ReactNode;
    label?: ReactNode;
    noText?: boolean;
}

declare interface DescriptionProps {
    id?: string;
    horizontal?: boolean;
    children: ReactNode;
}

declare type Dictionary = {
    [fieldName: string]: any;
};

export declare function Divider(): JSX.Element;

declare const Entry: EntryComponent;

declare type EntryComponent = React_2.FC<EntryProps>;

declare interface EntryProps {
    icon?: string;
    labelType?: Types_2;
    labelValue?: number;
    headerText?: string;
    footerText?: string;
    onFooterClick?: MouseEventHandler<HTMLLIElement>;
    className?: string;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLLIElement>;
}

declare type Focused = 'startDate' | 'endDate';

export declare const Footer: FooterComponent;

declare type FooterComponent = React_2.FC<FooterProps>;

declare interface FooterProps {
    children?: ReactNode;
    includeVersionInfo?: boolean;
}

export declare type FormTypes = FormTypes_2;

declare type FormTypes_2 = 'warning' | 'success' | 'error';

declare interface GenericSliderProps {
    min?: number;
    max?: number;
    step?: number | null;
    prefixCls?: string;
    vertical?: boolean;
    included?: boolean;
    disabled?: boolean;
    reverse?: boolean;
    trackStyle?: React_2.CSSProperties | React_2.CSSProperties[];
    handleStyle?: React_2.CSSProperties | React_2.CSSProperties[];
    autoFocus?: boolean;
    onFocus?: (e: React_2.FocusEvent<HTMLDivElement>) => void;
    onBlur?: (e: React_2.FocusEvent<HTMLDivElement>) => void;
    className?: string;
    marks?: Record<number, React_2.ReactNode | {
        style?: React_2.CSSProperties;
        label?: string;
    }>;
    dots?: boolean;
    maximumTrackStyle?: React_2.CSSProperties;
    style?: React_2.CSSProperties;
    railStyle?: React_2.CSSProperties;
    dotStyle?: React_2.CSSProperties;
    activeDotStyle?: React_2.CSSProperties;
    draggableTrack?: boolean;
}

declare interface HandleProps {
    prefixCls?: string;
    className?: string;
    vertical?: boolean;
    reverse?: boolean;
    offset?: number;
    style?: React_2.CSSProperties;
    disabled?: boolean;
    min?: number;
    max?: number;
    value?: number;
    tabIndex?: number;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaValueTextFormatter?: (val: number) => string;
    onMouseEnter?: React_2.MouseEventHandler;
    onMouseLeave?: React_2.MouseEventHandler;
}

declare function Header({ text }: Props_2): JSX.Element;

declare interface IInputProps extends React_2.TextareaHTMLAttributes<HTMLTextAreaElement>, React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, InputWrapperProps {
    type?: FormTypes_2;
    size?: any;
    width?: string;
    children?: ReactNode;
    onCopy?: ClipboardEventHandler<any>;
    onCopyCapture?: ClipboardEventHandler<any>;
    onCut?: ClipboardEventHandler<any>;
    onCutCapture?: ClipboardEventHandler<any>;
    onPaste?: ClipboardEventHandler<any>;
    onPasteCapture?: ClipboardEventHandler<any>;
    onCompositionEnd?: CompositionEventHandler<any>;
    onCompositionEndCapture?: CompositionEventHandler<any>;
    onCompositionStart?: CompositionEventHandler<any>;
    onCompositionStartCapture?: CompositionEventHandler<any>;
    onCompositionUpdate?: CompositionEventHandler<any>;
    onCompositionUpdateCapture?: CompositionEventHandler<any>;
    onFocus?: FocusEventHandler<any>;
    onFocusCapture?: FocusEventHandler<any>;
    onBlur?: FocusEventHandler<any>;
    onBlurCapture?: FocusEventHandler<any>;
    onChange?: FormEventHandler<any>;
    onChangeCapture?: FormEventHandler<any>;
    onBeforeInput?: FormEventHandler<any>;
    onBeforeInputCapture?: FormEventHandler<any>;
    onInput?: FormEventHandler<any>;
    onInputCapture?: FormEventHandler<any>;
    onReset?: FormEventHandler<any>;
    onResetCapture?: FormEventHandler<any>;
    onSubmit?: FormEventHandler<any>;
    onSubmitCapture?: FormEventHandler<any>;
    onInvalid?: FormEventHandler<any>;
    onInvalidCapture?: FormEventHandler<any>;
    onLoad?: ReactEventHandler<any>;
    onLoadCapture?: ReactEventHandler<any>;
    onError?: ReactEventHandler<any>;
    onErrorCapture?: ReactEventHandler<any>;
    onKeyDown?: KeyboardEventHandler<any>;
    onKeyDownCapture?: KeyboardEventHandler<any>;
    onKeyPress?: KeyboardEventHandler<any>;
    onKeyPressCapture?: KeyboardEventHandler<any>;
    onKeyUp?: KeyboardEventHandler<any>;
    onKeyUpCapture?: KeyboardEventHandler<any>;
    onAbort?: ReactEventHandler<any>;
    onAbortCapture?: ReactEventHandler<any>;
    onCanPlay?: ReactEventHandler<any>;
    onCanPlayCapture?: ReactEventHandler<any>;
    onCanPlayThrough?: ReactEventHandler<any>;
    onCanPlayThroughCapture?: ReactEventHandler<any>;
    onDurationChange?: ReactEventHandler<any>;
    onDurationChangeCapture?: ReactEventHandler<any>;
    onEmptied?: ReactEventHandler<any>;
    onEmptiedCapture?: ReactEventHandler<any>;
    onEncrypted?: ReactEventHandler<any>;
    onEncryptedCapture?: ReactEventHandler<any>;
    onEnded?: ReactEventHandler<any>;
    onEndedCapture?: ReactEventHandler<any>;
    onLoadedData?: ReactEventHandler<any>;
    onLoadedDataCapture?: ReactEventHandler<any>;
    onLoadedMetadata?: ReactEventHandler<any>;
    onLoadedMetadataCapture?: ReactEventHandler<any>;
    onLoadStart?: ReactEventHandler<any>;
    onLoadStartCapture?: ReactEventHandler<any>;
    onPause?: ReactEventHandler<any>;
    onPauseCapture?: ReactEventHandler<any>;
    onPlay?: ReactEventHandler<any>;
    onPlayCapture?: ReactEventHandler<any>;
    onPlaying?: ReactEventHandler<any>;
    onPlayingCapture?: ReactEventHandler<any>;
    onProgress?: ReactEventHandler<any>;
    onProgressCapture?: ReactEventHandler<any>;
    onRateChange?: ReactEventHandler<any>;
    onRateChangeCapture?: ReactEventHandler<any>;
    onSeeked?: ReactEventHandler<any>;
    onSeekedCapture?: ReactEventHandler<any>;
    onSeeking?: ReactEventHandler<any>;
    onSeekingCapture?: ReactEventHandler<any>;
    onStalled?: ReactEventHandler<any>;
    onStalledCapture?: ReactEventHandler<any>;
    onSuspend?: ReactEventHandler<any>;
    onSuspendCapture?: ReactEventHandler<any>;
    onTimeUpdate?: ReactEventHandler<any>;
    onTimeUpdateCapture?: ReactEventHandler<any>;
    onVolumeChange?: ReactEventHandler<any>;
    onVolumeChangeCapture?: ReactEventHandler<any>;
    onWaiting?: ReactEventHandler<any>;
    onWaitingCapture?: ReactEventHandler<any>;
    onAuxClick?: MouseEventHandler<any>;
    onAuxClickCapture?: MouseEventHandler<any>;
    onClick?: MouseEventHandler<any>;
    onClickCapture?: MouseEventHandler<any>;
    onContextMenu?: MouseEventHandler<any>;
    onContextMenuCapture?: MouseEventHandler<any>;
    onDoubleClick?: MouseEventHandler<any>;
    onDoubleClickCapture?: MouseEventHandler<any>;
    onDrag?: DragEventHandler<any>;
    onDragCapture?: DragEventHandler<any>;
    onDragEnd?: DragEventHandler<any>;
    onDragEndCapture?: DragEventHandler<any>;
    onDragEnter?: DragEventHandler<any>;
    onDragEnterCapture?: DragEventHandler<any>;
    onDragExit?: DragEventHandler<any>;
    onDragExitCapture?: DragEventHandler<any>;
    onDragLeave?: DragEventHandler<any>;
    onDragLeaveCapture?: DragEventHandler<any>;
    onDragOver?: DragEventHandler<any>;
    onDragOverCapture?: DragEventHandler<any>;
    onDragStart?: DragEventHandler<any>;
    onDragStartCapture?: DragEventHandler<any>;
    onDrop?: DragEventHandler<any>;
    onDropCapture?: DragEventHandler<any>;
    onMouseDown?: MouseEventHandler<any>;
    onMouseDownCapture?: MouseEventHandler<any>;
    onMouseEnter?: MouseEventHandler<any>;
    onMouseLeave?: MouseEventHandler<any>;
    onMouseMove?: MouseEventHandler<any>;
    onMouseMoveCapture?: MouseEventHandler<any>;
    onMouseOut?: MouseEventHandler<any>;
    onMouseOutCapture?: MouseEventHandler<any>;
    onMouseOver?: MouseEventHandler<any>;
    onMouseOverCapture?: MouseEventHandler<any>;
    onMouseUp?: MouseEventHandler<any>;
    onMouseUpCapture?: MouseEventHandler<any>;
    onSelect?: ReactEventHandler<any>;
    onSelectCapture?: ReactEventHandler<any>;
    onTouchCancel?: TouchEventHandler<any>;
    onTouchCancelCapture?: TouchEventHandler<any>;
    onTouchEnd?: TouchEventHandler<any>;
    onTouchEndCapture?: TouchEventHandler<any>;
    onTouchMove?: TouchEventHandler<any>;
    onTouchMoveCapture?: TouchEventHandler<any>;
    onTouchStart?: TouchEventHandler<any>;
    onTouchStartCapture?: TouchEventHandler<any>;
    onPointerDown?: PointerEventHandler<any>;
    onPointerDownCapture?: PointerEventHandler<any>;
    onPointerMove?: PointerEventHandler<any>;
    onPointerMoveCapture?: PointerEventHandler<any>;
    onPointerUp?: PointerEventHandler<any>;
    onPointerUpCapture?: PointerEventHandler<any>;
    onPointerCancel?: PointerEventHandler<any>;
    onPointerCancelCapture?: PointerEventHandler<any>;
    onPointerEnter?: PointerEventHandler<any>;
    onPointerEnterCapture?: PointerEventHandler<any>;
    onPointerLeave?: PointerEventHandler<any>;
    onPointerLeaveCapture?: PointerEventHandler<any>;
    onPointerOver?: PointerEventHandler<any>;
    onPointerOverCapture?: PointerEventHandler<any>;
    onPointerOut?: PointerEventHandler<any>;
    onPointerOutCapture?: PointerEventHandler<any>;
    onGotPointerCapture?: PointerEventHandler<any>;
    onGotPointerCaptureCapture?: PointerEventHandler<any>;
    onLostPointerCapture?: PointerEventHandler<any>;
    onLostPointerCaptureCapture?: PointerEventHandler<any>;
    onScroll?: UIEventHandler<any>;
    onScrollCapture?: UIEventHandler<any>;
    onWheel?: WheelEventHandler<any>;
    onWheelCapture?: WheelEventHandler<any>;
    onAnimationStart?: AnimationEventHandler<any>;
    onAnimationStartCapture?: AnimationEventHandler<any>;
    onAnimationEnd?: AnimationEventHandler<any>;
    onAnimationEndCapture?: AnimationEventHandler<any>;
    onAnimationIteration?: AnimationEventHandler<any>;
    onAnimationIterationCapture?: AnimationEventHandler<any>;
    onTransitionEnd?: TransitionEventHandler<any>;
    onTransitionEndCapture?: TransitionEventHandler<any>;
}

export declare const Infobox: InfoboxComponent;

export declare const Infobox2: Infobox2Component;

declare type Infobox2Component = React_2.FC<Infobox2Props>;

declare interface Infobox2Props {
    id?: string;
    color?: Colors_2;
    title?: string;
    subTitle?: string;
    text?: string;
    footerText?: string;
    icon: string;
    footerIcon?: string;
    onFooterClick?: MouseEventHandler<HTMLAnchorElement>;
    to?: string;
}

declare type InfoboxComponent = React_2.FC<InfoboxProps>;

declare interface InfoboxProps {
    id?: string;
    icon: string;
    text?: string;
    number?: string | ReactNode | string[] | ReactNode[];
    color?: Colors_2;
    progress?: number;
    progressText?: string;
    iconColorOnly?: boolean;
}

declare namespace Inputs {
    export {
        Slider,
        Text_2 as Text,
        Checkbox,
        Radio,
        Select,
        Select2_2 as Select2,
        Date_2 as Date,
        DateRange,
        DateTime,
        InputWrapper as ImportWrapper
    }
}
export { Inputs }

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
    render(): JSX.Element;
}

declare interface InputWrapperProps extends LabelProps {
    iconLeft?: string;
    iconRight?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: Sizes_2;
    checkboxLeft?: boolean;
    checkboxLeftProps?: React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    checkboxRight?: boolean;
    checkboxRightProps?: React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    radioLeft?: boolean;
    radioLeftProps?: React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    radioRight?: boolean;
    radioRightProps?: React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    buttonLeft?: ReactNode;
    buttonRight?: ReactNode;
    children?: ReactNode;
    width?: string;
    help?: string;
}

declare interface InputWrapperState {
}

declare type ItemComponent = React_2.FC<ItemProps>;

declare interface ItemLabel {
    small: boolean;
    color: Colors_2;
    text: string;
    type: Types_2;
}

declare interface ItemProps extends RouteComponentProps {
    id?: string;
    children?: ItemComponent;
    icon?: string;
    text: string;
    labels?: ItemLabel | ItemLabel[];
    color?: Colors_2;
    activeOn?: string | string[];
    to?: string;
    highlighted?: boolean;
}

export declare function Label({ id, type, pullRight, children, }: Props_7): ReactElement;

export declare namespace Label {
    var defaultProps: {
        id: undefined;
        children: null;
        pullRight: boolean;
    };
}

declare interface LabelProps {
    label?: ReactNode;
    labelPosition?: 'above' | 'left' | 'none';
    labelXs?: ColSpacing;
    labelSm?: ColSpacing;
    labelMd?: ColSpacing;
    labelLg?: ColSpacing;
    name?: string;
    xs?: ColSpacing;
    sm?: ColSpacing;
    md?: ColSpacing;
    lg?: ColSpacing;
    labelIcon?: string;
    type?: FormTypes_2;
    children?: ReactNode;
    labelClass?: string;
}

export declare const LoadingSpinner: ({ icon, size }: Props_8) => JSX.Element;

export declare const LoginCore: LoginCoreComponent;

declare type LoginCoreComponent = React_2.FC<LoginCoreProps>;

declare interface LoginCoreProps {
    children?: ReactNode;
}

export declare const Margin: MarginComponent;

declare type MarginComponent = React_2.FC<MarginProps>;

declare interface MarginProps {
    children: ReactNode;
    pullRight?: boolean;
}

export declare class Memberbox extends Component<MemberboxProps, MemberboxState> {
    static defaultProps: {
        id: undefined;
        title: null;
        collapsable: boolean;
        closable: boolean;
        async: boolean;
        viewAllLink: string;
    };
    state: MemberboxState;
    componentDidMount(): void;
    getUser({ name, lastOnline, image }: any): JSX.Element;
    getUsers(users: any): any;
    users: {
        name: string;
        lastOnline: string;
        image: string;
    }[];
    render(): JSX.Element;
}

declare interface MemberboxProps {
    id?: string;
    type: Types_2;
    title?: string;
    collapsable?: boolean;
    closable?: boolean;
    async?: boolean;
    viewAllLink?: string;
}

declare interface MemberboxState {
    users: any;
}

declare const MessageItem: MessageItemComponent;

declare type MessageItemComponent = React_2.FC<MessageItemProps>;

declare interface MessageItemProps {
    imageUrl?: string;
    imageAlt?: string;
    text: string;
    subText?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    when?: MomentNS.Moment;
    whenFormats?: WhenFormatsType;
}

declare interface MySliderProps extends GenericSliderProps {
    color?: Colors_2;
    vertical?: boolean;
    defaultValue?: number | number[];
    value?: number | number[];
    rcSliderProps?: GenericSliderProps;
    onChange?: ((value: number) => void) | ((value: number[]) => void);
    onBeforeChange?: ((value: number) => void) | ((value: number[]) => void);
    onAfterChange?: ((value: number) => void) | ((value: number[]) => void);
    tooltipRender: Function;
    tooltipVisible: 'always' | 'dragging' | 'never';
    handle: (props: HandleProps) => ReactElement;
}

declare namespace Navbar {
    export {
        Navbar_2 as Core,
        Entry,
        MessageItem,
        NotificationItem,
        TaskItem,
        ControlSidebarEntry
    }
}
export { Navbar }

declare const Navbar_2: NavbarComponent;

declare type NavbarComponent = React_2.FC<NavbarProps>;

declare interface NavbarProps {
    additionalMenus?: ReactNode;
    children?: ReactNode;
}

export declare const NavList: NavListComponent;

declare type NavListComponent = React_2.FC<NavListProps>;

export declare const NavListItem: NavListItemComponent;

declare type NavListItemComponent = React_2.FC<NavListItemProps>;

declare interface NavListItemProps {
    icon?: string;
    text?: string;
    iconLabel?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    color?: Colors_2;
    to?: string;
}

declare interface NavListProps {
    children: ReactNode;
    pills?: boolean;
    stacked?: boolean;
}

declare type Node_2 = React_2.ReactNode;

declare const NotificationItem: NotificationItemComponent;

declare type NotificationItemComponent = React_2.FC<NotificationItemProps>;

declare interface NotificationItemProps {
    icon?: string;
    iconColor?: Colors_2;
    text: string;
    to?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export declare class Pagination extends Component<PaginationProps, PaginationState> {
    static defaultProps: {
        activePage: undefined;
        totalElements: undefined;
        pageSize: undefined;
        hasMore: undefined;
        labels: {
            first: string;
            last: string;
            previous: string;
            next: string;
        };
    };
    constructor(props: PaginationProps);
    state: PaginationState;
    componentDidUpdate({ totalElements: oldTotalElements }: PaginationProps): void;
    onChange(event: any): void;
    keyMaps: Dictionary;
    render(): JSX.Element;
}

declare interface PaginationProps {
    activePage?: number;
    totalElements?: number;
    pageSize?: number;
    hasMore?: boolean;
    onChange?: (value: number) => void;
    labels?: {
        first?: string;
        last?: string;
        previous?: string;
        next?: string;
    };
}

declare interface PaginationState {
    totalPages: number | null;
}

export declare const ProductList: ProductListComponent;

declare type ProductListComponent = React_2.FC<ProductListProps>;

export declare const ProductListItem: ProductListItemComponent;

declare type ProductListItemComponent = React_2.FC<ProductListItemProps>;

declare interface ProductListItemProps {
    description?: string;
    title?: string;
    label?: string;
    labelType?: Types_2;
    image?: string;
    to?: string;
}

declare interface ProductListProps {
    inBox?: boolean;
    children: ReactNode;
}

export declare const ProgressBar: ProgressBarComponent;

declare type ProgressBarComponent = React_2.FC<ProgressBarProps>;

declare interface ProgressBarProps {
    type?: Types_2;
    color?: Colors_2;
    striped?: boolean;
    min?: number;
    max?: number;
    text?: string;
    value: number;
    active?: boolean;
    sm?: boolean;
    xs?: boolean;
    xxs?: boolean;
    vertical?: boolean;
}

export declare const ProgressGroup: ProgressGroupComponent;

declare type ProgressGroupComponent = React_2.FC<ProgressGroupProps>;

declare interface ProgressGroupProps {
    currentValue: number;
    maxValue: number;
    color: Colors_2;
    text?: string;
}

declare type Props = {
    children: ReactElement | ReactElement[];
    title: string | string[];
    titleShort: string | string[];
    theme: Themes;
    browserTitle: string;
    sidebar: Node_2;
    footer: Node_2;
    homeTo: string;
    searchbarFilter: boolean;
};

declare interface Props_2 {
    text: string;
}

declare interface Props_3 {
}

declare interface Props_4 {
}

declare type Props_5 = {
    id?: string;
    closable?: boolean;
    onDismiss?: Function;
    type?: Types_2;
    icon?: string;
    title?: string;
    children?: ReactNode;
};

declare interface Props_6 extends IInputProps {
    options: RadioOptionType[];
}

declare interface Props_7 {
    id?: string;
    type: Types_2;
    pullRight?: boolean;
    children?: ReactNode;
}

declare type Props_8 = {
    icon?: string;
    size?: SizeProp;
};

declare function Radio(props: Props_6): ReactElement;

declare interface RadioOptionType extends SelectOptionType {
    checked?: boolean;
    label: string;
}

export { Row }

declare class Searchbar extends Component<SearchbarProps, {}> {
    static defaultProps: {
        includeButton: boolean;
        onButtonClick: undefined;
        onChange: undefined;
        placeholder: undefined;
        value: undefined;
        defaultValue: undefined;
    };
    state: {};
    render(): JSX.Element;
}

declare interface SearchbarProps {
    includeButton: boolean;
    onButtonClick: MouseEventHandler<HTMLButtonElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    value: string | number;
    defaultValue: string | number;
}

declare class Select extends Component<SelectProps, SelectState> {
    state: SelectState;
    mapOptions: (options: SelectOptionType[]) => ({
        value: string | number;
        text: string;
        disabled: boolean;
    } | {
        value: never;
        text: never;
        disabled?: undefined;
    })[];
    mapSingleOption: (p: SelectOptionType) => {
        value: string | number;
        text: string;
        disabled: boolean;
    } | {
        value: never;
        text: never;
        disabled?: undefined;
    };
    render(): JSX.Element;
}

declare class Select2_2 extends Component<Select2Props, Select2State> {
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
    render(): JSX.Element;
}

declare interface Select2Props extends InputWrapperProps {
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

declare interface Select2State {
}

declare type SelectedRowType = number | string | number[] | string[];

declare interface SelectOptionType {
    id?: string;
    text: string;
    value: string | number;
    disabled?: boolean;
}

declare interface SelectProps extends IInputProps {
    options: SelectOptionType[];
    label: string;
    disabled: boolean;
    multiple: boolean;
}

declare interface SelectState {
}

declare interface SharedDateProps {
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    showClearDate?: boolean;
    inputIconPosition?: 'before' | 'after';
    noBorder?: boolean;
    block?: boolean;
    small?: boolean;
    regular?: boolean;
}

declare namespace Sidebar {
    export {
        Sidebar_2 as default,
        _default as Item,
        Sidebar_2 as Core,
        Header,
        UserPanel,
        Searchbar
    }
}
export { Sidebar }

declare class Sidebar_2 extends Component<SidebarProps, SidebarState> {
    static defaultProps: {
        children: null;
        searchbarFilter: boolean;
    };
    constructor(props: SidebarProps);
    componentDidMount(): void;
    onSearchValueChange(e: React_2.ChangeEvent<HTMLInputElement>): void;
    widgetReference: HTMLUListElement | null;
    render(): JSX.Element;
}

declare type SidebarProps = {
    children: React_2.ReactNode;
    searchbarFilter: boolean;
};

declare type SidebarState = {
    searchValue: string;
};

export declare class SimpleTable extends Component<SimpleTableProps, SimpleTableState> {
    static defaultProps: {
        data: null;
        columns: null;
        condensed: boolean;
        striped: boolean;
        noMargin: boolean;
        border: boolean;
        responsive: boolean;
        hover: boolean;
        onSelect: undefined;
        simpleCompare: boolean;
    };
    constructor(props: SimpleTableProps);
    state: SimpleTableState;
    componentDidUpdate({ data: oldData, }: SimpleTableProps, { selectedRow: oldSelectedRow }: SimpleTableState): void;
    onSelect: (data: DataType, rowIdx: number) => void;
    updateStateData: () => void;
    mapCell(data: any, column: any, rowData: any, rowIdx: number): JSX.Element;
    render(): JSX.Element;
}

declare interface SimpleTableProps {
    data?: DataType;
    columns: Array<ColumnType>;
    condensed?: boolean;
    striped?: boolean;
    noMargin?: boolean;
    border?: boolean;
    responsive?: boolean;
    hover?: boolean;
    onSelect?: Function;
    simpleCompare?: boolean;
}

declare interface SimpleTableState {
    key: string;
    selectedRow?: SelectedRowType;
    mappedData?: any;
}

export declare type Sizes = Sizes_2;

declare type Sizes_2 = 'xs' | 'sm' | 'md' | 'lg';

declare class Slider extends Component<MySliderProps, SliderState> {
    static defaultProps: {
        color: string;
        vertical: boolean;
        value: undefined;
        defaultValue: undefined;
        rcSliderProps: undefined;
        onChange: undefined;
        tooltipRender: undefined;
        tooltipVisible: string;
        handle: undefined;
    };
    constructor(props: MySliderProps);
    state: {};
    private static getTrackColor;
    getHandle: (props: HandleProps) => ReactElement;
    constructElement(props: MySliderProps): void;
    Element: ElementType;
    render(): JSX.Element;
}

declare interface SliderState {
}

declare type SmartColumnType = ColumnType & {
    toggleHidden?: boolean;
    toggleOrder?: boolean;
    order?: SmartTableOrderDirection;
    hidden?: boolean;
    rawValue: any;
    onFilter: (data: string, value: string) => boolean;
};

declare interface SmartOrderType {
    column: string;
    direction: SmartTableOrderDirection;
}

declare interface SmartPagination {
    pageSize?: number;
    totalElements: number;
    activePage: number;
}

export declare class SmartTable extends Component<SmartTableProps, SmartTableState> {
    static columnsFromData(data: DataType[]): SmartColumnType[];
    static headersFromColumns(columns: SmartColumnType[], key: string, order: SmartOrderType[], orderChanged: SmartTableOrderChangedCallback, _setFilterValue: (temp: any) => void, hiddenColumns: string[]): ReactElement[];
    static searchButtonsFromColumns(columns: SmartColumnType[], filterColumn: string | undefined, setFilterColumn: (column: string, title?: string) => void): JSX.Element[];
    static mapCell(data: any, column: ColumnType, rowData: DataType, rowIdx: number, key: string): JSX.Element;
    static defaultProps: {
        data: null;
        columns: undefined;
        condensed: boolean;
        striped: boolean;
        noMargin: boolean;
        border: boolean;
        responsive: boolean;
        hover: boolean;
        onRowSelect: undefined;
        onSearchChange: undefined;
        onSearch: undefined;
        defaultFilterColumn: string;
        pageSize: number;
        page: undefined;
        totalElements: undefined;
        hasMore: undefined;
        onPageChange: undefined;
        filterExternal: boolean;
        onOrderChange: undefined;
        select: string;
        selectionMode: string;
        selectionProperty: string;
        simpleCompare: boolean;
    };
    constructor(props: SmartTableProps);
    componentDidUpdate(prevProps: SmartTableProps, prevState: SmartTableState): void;
    handleCloseModal: () => void;
    handleAccept: (newState: any) => void;
    onFilterColumnChanged: (filterColumn: any, searchPlaceholder: any) => void;
    onOrderChanged: (column: string, direction: SmartTableHeaderOrderDirection) => void;
    onFilter: () => void;
    onRowSelect: (data?: DataType, rowIdx?: number) => void;
    onRowDeselect: (data: DataType, rowIdx: number) => void;
    onPageChange: (page: number) => void;
    setFilterValueAndFilter: (event: any) => void;
    setFilterValue: (event: any) => void;
    getColumns: () => SmartColumnType[];
    filterValue?: string;
    openColumnModal: () => void;
    rowIsSelected(row: DataType, rowIdx: number, state: SmartTableState): boolean;
    mappedColumnsFromData: (data: DataType[], columns: SmartColumnType[] | undefined, pagination: any, hiddenColumns: string[], state: SmartTableState) => ReactElement[] | ReactElement;
    render(): JSX.Element;
}

declare type SmartTableHeaderOrderDirection = 'asc' | 'desc' | 'none';

declare interface SmartTableModalParams {
    component?: any;
    props?: DataType;
    title?: string;
}

declare type SmartTableOrderChangedCallback = (data: string, order: SmartTableHeaderOrderDirection) => void;

declare type SmartTableOrderDirection = 'asc' | 'desc';

declare interface SmartTableProps {
    data: DataType[];
    columns: SmartColumnType[];
    condensed?: boolean;
    striped?: boolean;
    noMargin?: boolean;
    border?: boolean;
    responsive?: boolean;
    hover?: boolean;
    onRowSelect?: (data?: DataType, index?: number) => void | boolean;
    onRowDeselect?: (data?: DataType, index?: number) => void | boolean;
    onSearchChange?: Function;
    onSearch?: Function;
    defaultFilterColumn?: string;
    pageSize?: number;
    page?: number;
    totalElements?: number;
    hasMore?: boolean;
    onPageChange?: Function;
    filterExternal?: boolean;
    onOrderChange?: Function;
    select?: 'single' | 'multiple';
    selectedRows?: any[];
    selectionMode: 'index' | 'property' | 'object';
    selectionProperty: string;
    simpleCompare: boolean;
}

declare interface SmartTableState {
    key: string;
    columns: SmartColumnType[];
    filterColumn?: string;
    placeholder: string;
    actions: ReactElement[];
    searchButtons: ReactElement[];
    pagination: SmartPagination;
    order: SmartOrderType[];
    selectedRow?: number | string;
    selectedRows: (number | string)[];
    selectedRowsData: DataType[];
    modal: SmartTableModalParams;
    hiddenColumns: string[];
    headers?: ReactElement[];
    mappedData: ReactElement[] | ReactElement;
    filteredData?: DataType[];
    filter?: {
        data: string;
        value: string;
    };
}

export declare const SparklineBox: SparklineBoxComponent;

declare type SparklineBoxComponent = React_2.FC<SparklineBoxProps>;

declare interface SparklineBoxProps {
    header?: string;
    text?: string;
    chartData: number[];
    color?: Colors_2;
}

declare interface State {
}

declare interface State_2 {
}

declare type State_3 = {
    closed: boolean;
};

export declare const TabContent: TabContentComponent;

declare type TabContentComponent = React_2.FC<TabContentProps>;

declare interface TabContentProps {
    eventKey: string;
    children: ReactNode;
}

declare type TabContentType = typeof TabContent;

export declare class Tabs extends Component<TabsProps, TabsState> {
    static defaultProps: {
        activeKey: null;
        defaultActiveKey: null;
        onSelect: null;
        pullRight: boolean;
        contentHeight: null;
        mountOnEnter: boolean;
        unmountOnExit: boolean;
        id: string;
        icon: null;
        title: null;
        titleLeft: boolean;
        onChange: undefined;
    };
    constructor(props: TabsProps);
    onSelect(activeKeyParam: string): void;
    render(): JSX.Element;
}

declare interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    onSelect?: Function;
    children: TabContentType | TabContentType[];
    pullRight?: boolean;
    contentHeight: number | string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    id?: string;
    icon?: string;
    title?: string;
    titleLeft?: boolean;
    onChange?: Function;
}

declare interface TabsState {
    stateActiveKey?: string;
}

declare const TaskItem: TaskItemComponent;

declare type TaskItemComponent = React_2.FC<TaskItemProps>;

declare interface TaskItemProps {
    value: number;
    barColor: Colors_2;
    text: string;
    to?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    min?: number;
    max?: number;
}

declare class Text_2 extends Component<TextProps, TextState> {
    static defaultProps: {
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

declare interface TextProps extends IInputProps {
    inputType?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    rows?: number;
}

declare interface TextState {
}

export declare type Themes = Themes_2;

declare type Themes_2 = 'black-light' | 'black' | 'blue' | 'blue-light' | 'green' | 'green-light' | 'purple' | 'purple-light' | 'red' | 'red-light' | 'yellow' | 'yellow-light';

export declare type Types = Types_2;

declare type Types_2 = 'default' | 'info' | 'danger' | 'warning' | 'success' | 'primary';

declare class UserPanel extends Component<UserPanelProps, {}> {
    static defaultProps: {
        imageUrl: undefined;
        link: string;
        status: string;
        statusType: string;
    };
    state: {};
    render(): JSX.Element;
}

declare interface UserPanelProps {
    username: string;
    imageUrl?: string;
    link: string;
    status: string;
    statusType: Types_2;
}

declare type WhenFormatsType = {
    minutes: string;
    hours: string;
    today: string;
    yesterday: string;
    days: string;
};

export { }
