import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'select2/dist/js/select2';
import 'select2/dist/css/select2.css';

import './Select2.css';
import InputWrapper from './InputWrapper';
import { arrayEquals } from '../../Utilities';
import { OptionShape, ValueShape, ListOfValueShape, ArrayOfValueShape } from './InputShapes';

class Select2 extends Component {
  state = {}

  boundHandlers = {}

  internalOptions = {}

  actualOptions = {}

  constructor(props) {
    super(props);
    const { options } = props;
    this.mapOptions(options);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const {
      placeholder, multiple, options, defaultWidgetOptions, allowClear, value,
      onFetchData, select2Options, fetchDataDelay,
      ...props
    } = this.props;
    const actualWidgetOptions = {
      ...select2Options,
      ...defaultWidgetOptions,
    };
    const data = this.internalOptions;
    const $temp = $(this.domRef);
    let fakeAjax;
    if (actualWidgetOptions.language) {
      const newLanguage = {};
      Object.entries(actualWidgetOptions.language).forEach(([key, value]) => {
        if (typeof value === 'function') {
          newLanguage[key] = value;
        } else {
          newLanguage[key] = () => value;
        }
      });
      actualWidgetOptions.language = newLanguage;
    }
    if (onFetchData) {
      const newTransport = (params, success, failure) => {
        const { data: { term, page } } = params;
        const highjackedSuccess = (data2, hasMore) => {
          const newOptions = this.actualOptions.concat(data2);
          this.mapOptions(newOptions);
          success({ results: this.optionsToSelect2(data2), pagination: { more: hasMore } });
        };
        const highjackedFailure = () => {
          failure();
        };
        onFetchData({ page: page || 0, searchValue: term || '' }, highjackedSuccess, highjackedFailure);
        return { status: 404 };
      };
      fakeAjax = { transport: newTransport, delay: fetchDataDelay };
    }
    const $ref = $temp.select2({
      placeholder,
      data,
      allowClear,
      ajax: fakeAjax,
      ...actualWidgetOptions,
    });

    const handleEvent = (event, callback) => {
      const value2 = this.getValue($ref.select2('data'), multiple);
      // eslint-disable-next-line no-param-reassign
      event.params = {};
      // eslint-disable-next-line no-param-reassign
      event.params.data = value2;
      callback(event);
    };
    const boundHandlers = {};

    const bindEvent = ([eventName, callback]) => {
      const jQueryEvent = this.toJQueryEvent(eventName);

      const actualCallback = (e) => { handleEvent(e, callback); };
      boundHandlers[eventName] = { callback, actualCallback, jQueryEvent };
      $ref.on(jQueryEvent, actualCallback);
    };

    // Find all Eventhandler Props and bind them
    Object.entries(props)
      .filter(([key, value2]) => key.startsWith('on') && value2)
      .forEach(bindEvent);

    this.boundHandlers = boundHandlers;
    $ref.on('select2:select', () => this.handleSelect);
    $ref.val(value).trigger('change.select2');
    this.$ref = $ref;
  }

  shouldComponentUpdate({
    options, value, disabled, ...props
  }) {
    const {
      options: propOptions, multiple, value: propValue, disabled: propDisabled,
    } = this.props;
    if (disabled !== propDisabled) {
      return true;
    }
    // Options changed
    if (!arrayEquals(options, propOptions)) {
      // console.log(`Select2 with label ${this.props.label} will update because of options`);
      return true;
    }
    // Value changed
    if ((value || propValue) && multiple ? !arrayEquals(value, propValue) : value !== propValue) {
      // console.log(`Select2 with label ${this.props.label} will update because of value`);
      return true;
    }
    const BreakException = {};
    const { boundHandlers } = this;
    // Eventhandler changed
    try {
      Object.entries(props)
        .filter(([key]) => key.startsWith('on'))
        .forEach(([key, callback]) => {
          if (callback !== boundHandlers[key].callback) {
            throw BreakException;
          }
        });
    } catch (e) {
      // console.log(`Select2 with label ${this.props.label} will update because of callback`);
      return true;
    }
    return false;
  }

  componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }) {
    // console.log(`Select2 with label ${this.props.label} did update`);
    const {
      value, multiple, disabled, options,
    } = this.props;
    const $ref = $(this.domRef);

    if (disabled !== oldDisabled) {
      $ref.prop('disabled', disabled);
    }
    // If value changed update select2 value
    if (value !== oldValue) {
      // console.log(`Updating value from Select2 with label ${this.props.label}`);
      $ref.val(value).trigger('change.select2');
    }
    // Loop Eventhandler Props and unbinded removed events and bind new events
    Object.entries(this.props)
      .filter(([key]) => key.startsWith('on'))
      .forEach(([eventName, callback]) => {
        const boundHandler = this.boundHandlers[eventName] || {};
        {
          const { callback: storedCallback, actualCallback, jQueryEvent } = boundHandler;
          // Eventhandler exists and new handler is different from old
          if (storedCallback && callback !== storedCallback) {
            $ref.unbind(jQueryEvent, actualCallback);
          }
        }
        const { callback: storedCallback } = boundHandler;
        if (callback && callback !== storedCallback) {
          const jQueryEvent = this.toJQueryEvent(eventName);

          const handleEvent = (event, callback2) => {
            const value2 = this.getValue($ref.select2('data'), multiple);
            // eslint-disable-next-line no-param-reassign
            event.params = {};
            // eslint-disable-next-line no-param-reassign
            event.params.data = value2;
            callback2(event);
          };

          const actualCallback = (e) => { handleEvent(e, callback); };
          // Store bound event handler to be able to later remove it
          this.boundHandlers[eventName] = { callback, actualCallback, jQueryEvent };
          $ref.on(jQueryEvent, actualCallback);
        }
      });
    if (!arrayEquals(options, oldOptions)) {
      const currVal = $ref.val();
      $ref.find('option').remove();
      this.mapOptions(options);
      this.internalOptions.forEach(({ id, text }) => {
        // eslint-disable-next-line no-undef
        const newOption = new Option(text, id, false, false);
        $ref.append(newOption);
      });
      $ref.val(currVal);
      $ref.trigger('select2:change');
    }
  }

  componentWillUnmount() {
    $(this.domRef)
      .select2('destroy');
  }

  singleOptionToSelect2 = (p) => {
    if (typeof p === 'object') {
      const { value: id, label: text, ...props } = p;
      return { id, text: text || id, ...props };
    }
    return { id: p, text: p };
  }

  optionsToSelect2 =
   scopedOptions => scopedOptions && scopedOptions.map(this.singleOptionToSelect2);

  optionsFromSelect2 = select2Options => select2Options.map(({ id }) => this.mapped[id].actual);

  getValue = (select2Options, multiple) => {
    let value = this.optionsFromSelect2(select2Options);
    if (!multiple && value.length > 0) {
      [value] = value;
    }
    return value;
  };

  handleSelect() {
    const { value: propValue, multiple } = this.props;
    const { $ref } = this;
    const newValue = this.getValue($ref.select2('data'), multiple);
    if (propValue && newValue !== propValue) {
      $ref.val(propValue).trigger('change.select2');
    }
  }

  mapOptions(options) {
    this.actualOptions = options;
    this.internalOptions = this.optionsToSelect2(options);
    const mapped = {};
    options.forEach((p, i) => {
      if (typeof p === 'object') {
        const { value } = p;
        mapped[value] = {};
        mapped[value].actual = value;
        mapped[value].internal = this.internalOptions[i];
      } else {
        mapped[p] = {};
        mapped[p].actual = p;
        mapped[p].internal = this.internalOptions[i];
      }
    });
    this.mapped = mapped;
  }

  // eslint-disable-next-line class-methods-use-this
  toJQueryEvent(eventName) {
    let jQueryEvent;
    switch (eventName) {
      case 'onChange':
        jQueryEvent = 'change';
        break;
      case 'onBeforeClose':
        jQueryEvent = 'select2:closing';
        break;
      case 'onClose':
        jQueryEvent = 'select2:close';
        break;
      case 'onBeforeOpening':
        jQueryEvent = 'select2:opening';
        break;
      case 'onOpen':
        jQueryEvent = 'select2:open';
        break;
      case 'onBeforeSelect':
        jQueryEvent = 'select2:selecting';
        break;
      case 'onSelect':
        jQueryEvent = 'select2:select';
        break;
      case 'onBeforeUnselect':
        jQueryEvent = 'select2:unselecting';
        break;
      case 'onUnselect':
        jQueryEvent = 'select2:unselect';
        break;
      default:
        break;
    }
    return jQueryEvent;
  }


  render() {
    const {
      name, disabled, multiple, value, defaultValue, id, ...props
    } = this.props;
    return (
      <InputWrapper {...props}>
        <select
          id={id}
          ref={(c) => { this.domRef = c; }}
          name={name}
          className="form-control"
          disabled={disabled}
          multiple={multiple}
          defaultValue={defaultValue}
          style={{ width: '100%' }}
        />
      </InputWrapper>
    );
  }
}

Select2.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  options: ListOfValueShape,
  value: PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  defaultValue: PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  disabled: PropTypes.bool,
  defaultWidgetOptions: PropTypes.shape({}),
  select2Options: PropTypes.shape({}),
  name: PropTypes.string,
  allowClear: PropTypes.bool,
  onChange: PropTypes.func,
  onBeforeClose: PropTypes.func,
  onClose: PropTypes.func,
  onBeforeOpening: PropTypes.func,
  onOpen: PropTypes.func,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
  onBeforeUnselect: PropTypes.func,
  onUnselect: PropTypes.func,
  onFetchData: PropTypes.func,
  fetchDataDelay: PropTypes.number,
};

Select2.defaultProps = {
  id: null,
  placeholder: '',
  multiple: false,
  options: [],
  value: null,
  defaultValue: null,
  disabled: false,
  defaultWidgetOptions: {},
  select2Options: {},
  name: null,
  allowClear: false,
  onChange: null,
  onBeforeClose: null,
  onClose: null,
  onBeforeOpening: null,
  onOpen: null,
  onBeforeSelect: null,
  onSelect: null,
  onBeforeUnselect: null,
  onUnselect: null,
  onFetchData: undefined,
  fetchDataDelay: 100,
};

export default Select2;
