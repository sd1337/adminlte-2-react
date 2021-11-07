import React, { Component, MouseEventHandler, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core';
import './Box.scss';
import AnimateHeight from 'react-animate-height';
import { Types } from '../PropTypes';
import LoadingSpinner from './LoadingSpinner';
import { splitIcon } from '../Utilities';

type BoxProps = {
  id?: string,
  title?: string,
  collapsable?: boolean,
  closable?: boolean,
  footer?: ReactNode,
  type?: Types,
  options?: ReactNode,
  icon?: string,
  titleRight?: boolean,
  loaded?: boolean,
  noPadding?: boolean,
  badge?: ReactNode,
  toolIcon?: string,
  customOptions?: any,
  className?: string,
  footerClass?: string,
  collapsed?: boolean,
  solid?: boolean,
  textCenter?: boolean,
  padding?: boolean,
  bodyClassName?: string,
  border?: boolean,
  style?: any,
  header?: ReactNode,
  children?: ReactNode
};

type BoxState = {
  collapsed?: boolean,
  closing: boolean,
  closed: boolean
};

class Box extends Component<BoxProps, BoxState> {
  static defaultProps = {
    id: undefined,
    title: ' ',
    collapsable: false,
    closable: false,
    footer: null,
    type: null,
    options: null,
    icon: undefined,
    titleRight: false,
    loaded: true,
    noPadding: false,
    badge: null,
    toolIcon: 'fas-wrench',
    customOptions: null,
    className: null,
    footerClass: null,
    collapsed: false,
    solid: false,
    textCenter: false,
    padding: false,
    bodyClassName: null,
    border: false,
    style: null,
    header: null,
    children: null,
  };

  constructor(props: BoxProps) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      collapsed: this.props.collapsed,
      closing: false,
      closed: false,
    };
  }

  componentDidMount() {
    // Plugin.call($(this.main as any) as any, this);
  }

  close: MouseEventHandler<HTMLButtonElement> = () => {
    this.setState({
      closing: true,
    });
  };

  toggleHide: MouseEventHandler<HTMLButtonElement> = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  main: HTMLDivElement | null = null;

  render() {
    const {
      type, options, icon, title, titleRight, collapsable, closable, loaded,
      noPadding, badge, toolIcon, customOptions, className, footerClass,
      solid, textCenter, padding, bodyClassName, border, style, footer: footerContent,
      header: headerContent, children, id,
    } = this.props;
    const { collapsed, closing, closed } = this.state;

    if (closed) {
      return <></>;
    }

    const localToolIcon = splitIcon(toolIcon);
    const hasOptions = !!(options);
    const hasFooter = !!(footerContent);
    const hasHeaderContent = !!(headerContent);
    const hasIcon = !!(icon);
    const localIcon = hasIcon ? splitIcon(icon) : null;
    const hasTitle = title !== ' ';
    const hasHeader = hasOptions || hasHeaderContent || hasIcon || hasTitle
      || collapsable || closable || badge || customOptions;

    const joinedClassName = [
      'box',
      type && `box-${type}`,
      className || '',
      // collapsed && 'collapsed-box',
      solid && ' box-solid',
      // closing && ' box-closing',
    ].filter((p) => p).join(' ');

    const bodyClass = [
      'box-body',
      noPadding ? 'no-padding' : '',
      textCenter ? 'text-center' : '',
      padding ? 'pad' : '',
      bodyClassName,
    ].filter((p) => p).join(' ');

    const headerClass = [
      'box-header',
      border ? 'with-border' : '',
    ].filter((p) => p).join(' ');

    return (
      <AnimateHeight
        duration={500}
        height={closing ? '0%' : 'auto'}
      >
        <div
          id={id}
          ref={(c) => { this.main = c; }}
          className={joinedClassName}
          style={style}
        >
          {hasHeader && (
          <div className={headerClass}>
            <h3 className={`box-title${titleRight ? ' pull-right' : ''}`}>
              {hasIcon && <FontAwesomeIcon icon={localIcon as IconProp} />}
              {title && ` ${title}`}
            </h3>
            {hasHeaderContent && headerContent}
            <div className="box-tools pull-right">
              {badge}
              {collapsable && (
                <button
                  type="button"
                  className="btn btn-box-tool"
                  onClick={this.toggleHide}
                >
                  <FontAwesomeIcon icon={collapsed ? 'plus' : 'minus'} />
                </button>
              )}
              {customOptions}
              {hasOptions && (
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-box-tool dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <FontAwesomeIcon icon={localToolIcon} />

                  </button>
                  <ul className="dropdown-menu" role="menu">
                    {options}
                  </ul>
                </div>
              )}
              {closable && <button type="button" aria-label="close box" className="btn btn-box-tool" onClick={this.close}><FontAwesomeIcon icon="times" /></button>}
            </div>
          </div>
          )}
          <AnimateHeight
            duration={500}
            height={collapsed ? '0%' : 'auto'}
          >
            <div className={bodyClass}>
              {children}
            </div>
            {!loaded && <LoadingSpinner />}
            {hasFooter && (
            <div className={`box-footer${footerClass ? ` ${footerClass}` : ''}`}>
              {footerContent}
            </div>
            )}
          </AnimateHeight>
        </div>
      </AnimateHeight>
    );
  }
}

export default Box;
