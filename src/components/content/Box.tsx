import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core';
import { Types } from '../PropTypes';
import LoadingSpinner from './LoadingSpinner';
import { splitIcon } from '../Utilities';
import { Plugin } from './BoxWidget';

type BoxProps = {
  id?: string,
  title?: string,
  collapsable?: boolean,
  closable?: boolean,
  footer?: React.ReactNode | React.ReactNode[],
  type?: Types,
  options?: React.ReactNode | React.ReactNode[],
  icon?: IconProp,
  titleRight?: boolean,
  loaded?: boolean,
  noPadding?: boolean,
  badge?: React.ReactNode | React.ReactNode[],
  toolIcon?: IconProp,
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
  header?: React.ReactNode | React.ReactNode[],
  children?: React.ReactNode | React.ReactNode[]
};

type BoxState = {
  collapsed?: boolean
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
    icon: null,
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
    };
  }

  componentDidMount() {
    Plugin.call($(this.main as any) as any, this);
  }

  main: HTMLDivElement | null = null;

  render() {
    const {
      type, options, icon, title, titleRight, collapsable, closable, loaded,
      noPadding, badge, toolIcon, customOptions, className, footerClass,
      solid, textCenter, padding, bodyClassName, border, style, footer: footerContent,
      header: headerContent, children, id,
    } = this.props;
    const { collapsed } = this.state;

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
      type ? `box-${type}` : '',
      className || '',
      collapsed ? ' collapsed-box' : '',
      solid ? ' box-solid' : '',
    ].join(' ');

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
      <div id={id} ref={(c) => { this.main = c; }} className={joinedClassName} style={style}>
        {hasHeader && (
          <div className={headerClass}>
            <h3 className={`box-title${titleRight ? ' pull-right' : ''}`}>
              {hasIcon && <FontAwesomeIcon icon={localIcon} />}
              {title && ` ${title}`}
            </h3>
            {hasHeaderContent && headerContent}
            <div className="box-tools pull-right">
              {badge}
              {collapsable && (
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <FontAwesomeIcon icon={collapsed ? 'plus' : 'minus'} />
                </button>
              )}
              {customOptions}
              {hasOptions && (
                <div className="btn-group">
                  <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <FontAwesomeIcon icon={localToolIcon} />

                  </button>
                  <ul className="dropdown-menu" role="menu">
                    {options}
                  </ul>
                </div>
              )}
              {closable && <button type="button" aria-label="close box" className="btn btn-box-tool" data-widget="remove"><FontAwesomeIcon icon="times" /></button>}
            </div>
          </div>
        )}
        <div className={bodyClass}>
          {children}
        </div>
        {!loaded && <LoadingSpinner />}
        {hasFooter && (
          <div className={`box-footer${footerClass ? ` ${footerClass}` : ''}`}>
            {footerContent}
          </div>
        )}
      </div>
    );
  }
}

// Box.

export default Box;
