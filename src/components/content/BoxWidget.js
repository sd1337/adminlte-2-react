// BoxWidget Class Definition
// =====================

function BoxWidget(element, options) {
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

  $(this.element).removeClass(ClassName.collapsed);

  $(this.element).children(`${Selector.body}, ${Selector.footer}`)
    .slideDown(this.options.animationSpeed, () => {
      $(this.element).trigger(expandedEvent);
      that.setState({ collapsed: false });
    });
};

BoxWidget.prototype.collapse = function collapse() {
  const collapsedEvent = $.Event(Event.collapsed);

  $(this.element).children(`${Selector.body}, ${Selector.footer}`)
    .slideUp(this.options.animationSpeed, () => {
      $(this.element).addClass(ClassName.collapsed);
      $(this.element).trigger(collapsedEvent);
      that.setState({ collapsed: true });
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

export { BoxWidget, Plugin };