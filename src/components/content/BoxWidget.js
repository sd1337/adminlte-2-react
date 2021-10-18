// 'use strict';
/* eslint-disable-next-line global-require */
const $ = require('jquery');

const DataKey = 'lte.boxwidget';

const Default = {
  animationSpeed: 500,
  collapseTrigger: '[data-widget="collapse"]',
  removeTrigger: '[data-widget="remove"]',
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

function BoxWidget(element, options, boxThis) {
  this.boxThis = boxThis;
  this.element = element;
  this.options = options;
  /* eslint-disable-next-line no-underscore-dangle */
  this._setUpListeners();
}

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

  $(this.element).removeClass(ClassName.collapsed);

  $(this.element).children(`${Selector.body}, ${Selector.footer}`)
    .slideDown(this.options.animationSpeed, () => {
      $(this.element).trigger(expandedEvent);
      this.boxThis.setState({ collapsed: false });
    });
};

BoxWidget.prototype.collapse = function collapse() {
  const collapsedEvent = $.Event(Event.collapsed);

  $(this.element).children(`${Selector.body}, ${Selector.footer}`)
    .slideUp(this.options.animationSpeed, () => {
      $(this.element).addClass(ClassName.collapsed);
      $(this.element).trigger(collapsedEvent);
      this.boxThis.setState({ collapsed: true });
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
BoxWidget.prototype._setUpListeners = function setUpListeners() {
  const that2 = this;

  $(this.element).on('click', this.options.collapseTrigger, function click(event) {
    if (event) event.preventDefault();
    that2.toggle($(this));
    return false;
  });

  $(this.element).on('click', this.options.removeTrigger, function click(event) {
    if (event) event.preventDefault();
    that2.remove($(this));
    return false;
  });
};

// Plugin Definition
// =================
/* eslint-disable no-inner-declarations */
function Plugin(option, boxThis) {
  return this.each(function each() {
    const $this = $(this);
    let data = $this.data(DataKey);

    if (!data) {
      const options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
      data = new BoxWidget($this, options, boxThis);
      $this.data(DataKey, data);
    }

    if (typeof option === 'string') {
      if (typeof data[option] === 'undefined') {
        throw new Error(`No method named ${option}`);
      }
      data[option]();
    }
  });
}

export { BoxWidget, Plugin };
