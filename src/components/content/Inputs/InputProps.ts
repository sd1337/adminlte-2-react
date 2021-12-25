import React, {
  AnimationEventHandler, ClipboardEventHandler, CompositionEventHandler, DragEventHandler, FocusEventHandler,
  FormEventHandler, KeyboardEventHandler, MouseEventHandler, PointerEventHandler, ReactEventHandler, ReactNode,
  TouchEventHandler, TransitionEventHandler, UIEventHandler, WheelEventHandler,
} from 'react';
import { Moment } from 'moment';
import { FormTypes } from '../../PropTypes';
import { InputWrapperProps } from './InputWrapper';

export interface IInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  InputWrapperProps{
  type?: FormTypes,
  size?: any;
  width?: string;
  children?: ReactNode;
  // Clipboard Events
  onCopy?: ClipboardEventHandler<any>;
  onCopyCapture?: ClipboardEventHandler<any>;
  onCut?: ClipboardEventHandler<any>;
  onCutCapture?: ClipboardEventHandler<any>;
  onPaste?: ClipboardEventHandler<any>;
  onPasteCapture?: ClipboardEventHandler<any>;

  // Composition Events
  onCompositionEnd?: CompositionEventHandler<any>;
  onCompositionEndCapture?: CompositionEventHandler<any>;
  onCompositionStart?: CompositionEventHandler<any>;
  onCompositionStartCapture?: CompositionEventHandler<any>;
  onCompositionUpdate?: CompositionEventHandler<any>;
  onCompositionUpdateCapture?: CompositionEventHandler<any>;

  // Focus Events
  onFocus?: FocusEventHandler<any>;
  onFocusCapture?: FocusEventHandler<any>;
  onBlur?: FocusEventHandler<any>;
  onBlurCapture?: FocusEventHandler<any>;

  // Form Events
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

  // Image Events
  onLoad?: ReactEventHandler<any>;
  onLoadCapture?: ReactEventHandler<any>;
  onError?: ReactEventHandler<any>; // also a Media Event
  onErrorCapture?: ReactEventHandler<any>; // also a Media Event

  // Keyboard Events
  onKeyDown?: KeyboardEventHandler<any>;
  onKeyDownCapture?: KeyboardEventHandler<any>;
  onKeyPress?: KeyboardEventHandler<any>;
  onKeyPressCapture?: KeyboardEventHandler<any>;
  onKeyUp?: KeyboardEventHandler<any>;
  onKeyUpCapture?: KeyboardEventHandler<any>;

  // Media Events
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

  // MouseEvents
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

  // Selection Events
  onSelect?: ReactEventHandler<any>;
  onSelectCapture?: ReactEventHandler<any>;

  // Touch Events
  onTouchCancel?: TouchEventHandler<any>;
  onTouchCancelCapture?: TouchEventHandler<any>;
  onTouchEnd?: TouchEventHandler<any>;
  onTouchEndCapture?: TouchEventHandler<any>;
  onTouchMove?: TouchEventHandler<any>;
  onTouchMoveCapture?: TouchEventHandler<any>;
  onTouchStart?: TouchEventHandler<any>;
  onTouchStartCapture?: TouchEventHandler<any>;

  // Pointer Events
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

  // UI Events
  onScroll?: UIEventHandler<any>;
  onScrollCapture?: UIEventHandler<any>;

  // Wheel Events
  onWheel?: WheelEventHandler<any>;
  onWheelCapture?: WheelEventHandler<any>;

  // Animation Events
  onAnimationStart?: AnimationEventHandler<any>;
  onAnimationStartCapture?: AnimationEventHandler<any>;
  onAnimationEnd?: AnimationEventHandler<any>;
  onAnimationEndCapture?: AnimationEventHandler<any>;
  onAnimationIteration?: AnimationEventHandler<any>;
  onAnimationIterationCapture?: AnimationEventHandler<any>;

  // Transition Events
  onTransitionEnd?: TransitionEventHandler<any>;
  onTransitionEndCapture?: TransitionEventHandler<any>;
}

export interface SharedInputProps {
  name?: string,
  id?: string,
  onChange?: Function,
  onBlur?: Function,
  onFocus?: Function,
  placeholder?: string,
  disabled?: boolean,
  readOnly?: boolean,
}
export interface SharedInputDefaultProps {
  name: undefined,
  id: undefined,
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  placeholder: undefined,
  disabled: false,
  readOnly: false,
}

export interface SharedDateProps {
  disabled?: boolean,
  required?: boolean,
  readOnly?: boolean,
  showClearDate?: boolean,
  inputIconPosition?: 'before' | 'after',
  noBorder?: boolean,
  block?: boolean,
  small?: boolean,
  regular?: boolean,
}

export type DateType = Moment | string;

export interface SelectOptionType {
  id?: string,
  text: string,
  value: string | number,
  disabled?: boolean,
}

export type CombinedOptionType = string | number | SelectOptionType;

export interface RadioOptionType extends SelectOptionType{
  checked?: boolean,
  label: string,
}
export interface ICheckRadioOptionType extends SelectOptionType{
  checked?: boolean,
}
