import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Types } from '../PropTypes';

class Box extends Component {
  componentDidMount() {
    {
      // 'use strict';
      /* eslint-disable-next-line global-require */
      const $ = require('jquery');
      const DataKey = 'lte.boxwidget';

      const Default = {
        animationSpeed: 500,
        collapseTrigger: '[data-widget="collapse"]',
        removeTrigger: '[data-widget="remove"]',
        collapseIcon: 'fa-minus',
        expandIcon: 'fa-plus',
        removeIcon: 'fa-times',
      };

      const Selector = {
        data: '.box',
        collapsed: '.collapsed-box',
        header: '.box-header',
        body: '.box-body',
        footer: '.box-footer',
        tools: '.box-tools',
      };

      const ClassName = {
        collapsed: 'collapsed-box',
      };

      const Event = {
        collapsed: 'collapsed.boxwidget',
        expanded: 'expanded.boxwidget',
        removed: 'removed.boxwidget',
      };

      // BoxWidget Class Definition
      // =====================
      const BoxWidget = function BoxWidget(element, options) {
        this.element = element;
        this.options = options;
        /* eslint-disable-next-line no-underscore-dangle */
        this._setUpListeners();
      };

      BoxWidget.prototype.toggle = function toggle() {
        const isOpen = !$(this.element).is(Selector.collapsed);

        if (isOpen) {
          this.collapse();
        } else {
          this.expand();
        }
      };

      BoxWidget.prototype.expand = function expand() {
        const expandedEvent = $.Event(Event.expanded);
        const { collapseIcon, expandIcon } = this.options;

        $(this.element).removeClass(ClassName.collapsed);

        $(this.element)
          .children(`${Selector.header}, ${Selector.body}, ${Selector.footer}`)
          .children(Selector.tools)
          .find(`.${expandIcon}`)
          .removeClass(expandIcon)
          .addClass(collapseIcon);

        $(this.element).children(`${Selector.body}, ${Selector.footer}`)
          .slideDown(this.options.animationSpeed, () => {
            $(this.element).trigger(expandedEvent);
          });
      };

      BoxWidget.prototype.collapse = function collapse() {
        const collapsedEvent = $.Event(Event.collapsed);
        const { collapseIcon, expandIcon } = this.options;

        $(this.element)
          .children(`${Selector.header}, ${Selector.body}, ${Selector.footer}`)
          .children(Selector.tools)
          .find(`.${collapseIcon}`)
          .removeClass(collapseIcon)
          .addClass(expandIcon);

        $(this.element).children(`${Selector.body}, ${Selector.footer}`)
          .slideUp(this.options.animationSpeed, () => {
            $(this.element).addClass(ClassName.collapsed);
            $(this.element).trigger(collapsedEvent);
          });
      };

      BoxWidget.prototype.remove = function remove() {
        const removedEvent = $.Event(Event.removed);

        $(this.element).slideUp(this.options.animationSpeed, () => {
          $(this.element).trigger(removedEvent);
          $(this.element).remove();
        });
      };

      // Private

      /* eslint-disable-next-line no-underscore-dangle */
      BoxWidget.prototype._setUpListeners = function _setUpListeners() {
        const that = this;

        $(this.element).on('click', this.options.collapseTrigger, function click(event) {
          if (event) event.preventDefault();
          that.toggle($(this));
          return false;
        });

        $(this.element).on('click', this.options.removeTrigger, function click(event) {
          if (event) event.preventDefault();
          that.remove($(this));
          return false;
        });
      };

      // Plugin Definition
      // =================
      /* eslint-disable no-inner-declarations */
      function Plugin(option) {
        return this.each(function each() {
          const $this = $(this);
          let data = $this.data(DataKey);

          if (!data) {
            const options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
            $this.data(DataKey, (data = new BoxWidget($this, options)));
          }

          if (typeof option === 'string') {
            if (typeof data[option] === 'undefined') {
              throw new Error(`No method named ${option}`);
            }
            data[option]();
          }
        });
      }
      /*
        var old = $.fn.boxWidget;

        $.fn.boxWidget             = Plugin;
        $.fn.boxWidget.Constructor = BoxWidget;

        // No Conflict Mode
        // ================
        $.fn.boxWidget.noConflict = function () {
          $.fn.boxWidget = old;
          return this;
        };

        // BoxWidget Data API
        // ==================
        $(window).on('load', function () {
          $(Selector.data).each(function () {
            Plugin.call($(this));
          });
        }); */
      // debugger;
      Plugin.call($(this.main));
    }
  }

  static getLoadingContent() {
    return (
      <div className="overlay">
        <i className="fa fa-refresh fa-spin" />
      </div>
    );
  }

  render() {
    const {
      type, options, iconClass, title, titleRight, collapsable, closable, loaded,
      noPadding, badge, toolIcon, customOptions, className, footerClass,
      collapsed, solid, textCenter, padding, bodyClassName, border, style,
    } = this.props;
    const { footer: footerContent, header: headerContent, children } = this.props;

    const hasOptions = !!(options);
    const hasFooter = !!(footerContent);
    const hasHeaderContent = !!(headerContent);
    const hasIcon = !!(iconClass);
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
    ].join(' ');

    const headerClass = [
      'box-header',
      border ? 'with-border' : '',
    ].join(' ');

    return (
      <div ref={(c) => { this.main = c; }} className={joinedClassName} style={style}>
        {hasHeader && (
          <div className={headerClass}>
            {hasIcon && <i className={`fa ${iconClass}`} />}
            {title ? <h3 className="box-title">{title}</h3> : null}
            {titleRight ? <h3 className="box-title pull-right">{titleRight}</h3> : null}
            {hasHeaderContent && headerContent}
            <div className="box-tools pull-right">
              {badge}
              {collapsable && (
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className={`fa ${collapsed ? 'fa-plus' : 'fa-minus'}`} />
                </button>
              )}
              {customOptions}
              {hasOptions && (
                <div className="btn-group">
                  <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i className={`fa ${toolIcon}`} />

                  </button>
                  <ul className="dropdown-menu" role="menu">
                    {options}
                  </ul>
                </div>
              )}
              {closable && <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>}
            </div>
          </div>
        )}
        <div className={bodyClass}>
          {children}
        </div>
        {!loaded && this.getLoadingContent()}
        {hasFooter && (
          <div className={`box-footer${footerClass ? ` ${footerClass}` : ''}`}>
            {footerContent}
          </div>
        )}
      </div>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string,
  collapsable: PropTypes.bool,
  closable: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(Types),
  /* eslint-disable react/forbid-prop-types */
  options: PropTypes.array,
  iconClass: PropTypes.string,
  titleRight: PropTypes.bool,
  loaded: PropTypes.bool,
  noPadding: PropTypes.bool,
  /* TODO: make prop more specific */
  badge: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  toolIcon: PropTypes.string,
  customOptions: PropTypes.shape({

  }),
  className: PropTypes.string,
  footerClass: PropTypes.string,
  collapsed: PropTypes.bool,
  solid: PropTypes.bool,
  textCenter: PropTypes.bool,
  padding: PropTypes.bool,
  bodyClassName: PropTypes.string,
  border: PropTypes.bool,
  style: PropTypes.shape({

  }),
  header: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Box.defaultProps = {
  title: ' ',
  collapsable: false,
  closable: false,
  footer: null,
  type: null,
  options: null,
  iconClass: null,
  titleRight: false,
  loaded: true,
  noPadding: false,
  badge: null,
  toolIcon: 'fa-wrench',
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

export default Box;
