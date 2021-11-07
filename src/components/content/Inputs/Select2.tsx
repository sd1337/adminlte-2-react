import React, { Component } from 'react';
import $ from 'jquery';
import 'select2/dist/js/select2';
import 'select2/dist/css/select2.css';

import './Select2.css';
import InputWrapper, { InputWrapperProps } from './InputWrapper';
import { arrayEquals } from '../../Utilities';
import { SelectOptionType } from './InputProps';
import { Dictionary } from '../../PropTypes';

interface Select2Props extends InputWrapperProps {
  id?: string
  placeholder?: string
  multiple?: boolean
  options: SelectOptionType[]
  value: any, // PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  defaultValue: any, // PropTypes.oneOfType([ValueShape, ArrayOfValueShape]),
  disabled?: boolean
  defaultWidgetOptions: any, // PropTypes.shape({}),
  select2Options: any, // PropTypes.shape({}),
  name?: string
  allowClear?: boolean
  onChange?: Function
  onBeforeClose?: Function
  onClose?: Function
  onBeforeOpening?: Function
  onOpen?: Function
  onBeforeSelect?: Function
  onSelect?: Function
  onBeforeUnselect?: Function
  onUnselect?: Function
  onFetchData?: Function
  fetchDataDelay?: number
}

interface Select2State {

}

class Select2 extends Component<Select2Props, Select2State> {
  static defaultProps = {
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

  constructor(props: Select2Props) {
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
    const $temp = $((this.domRef as any));
    let fakeAjax;
    if (actualWidgetOptions.language) {
      const newLanguage: Dictionary = {};
      Object.entries(actualWidgetOptions.language).forEach(([key, innerValue]) => {
        if (typeof innerValue === 'function') {
          newLanguage[key] = innerValue;
        } else {
          newLanguage[key] = () => innerValue;
        }
      });
      actualWidgetOptions.language = newLanguage;
    }
    if (onFetchData) {
      const newTransport = (params: any, success: any, failure: any) => {
        const { data: { term, page } } = params;
        const highjackedSuccess = (data2: any, hasMore: any) => {
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

    const handleEvent = (event: any, callback: any) => {
      const value2 = this.getValue(($ref as any).select2('data'), multiple);
      // eslint-disable-next-line no-param-reassign
      event.params = {};
      // eslint-disable-next-line no-param-reassign
      event.params.data = value2;
      callback(event);
    };
    const boundHandlers: Dictionary = {};

    const bindEvent = ([eventName, callback]: any[]) => {
      const jQueryEvent = this.toJQueryEvent(eventName);

      const actualCallback = (e: any) => { handleEvent(e, callback); };
      boundHandlers[eventName] = { callback, actualCallback, jQueryEvent };
      ($ref as any).on(jQueryEvent, actualCallback);
    };

    // Find all Eventhandler Props and bind them
    Object.entries(props)
      .filter(([key, value2]) => key.startsWith('on') && value2)
      .forEach(bindEvent);

    this.boundHandlers = boundHandlers;
    ($ref as any).on('select2:select', () => this.handleSelect);
    ($ref as any).val(value).trigger('change.select2');
    this.$ref = $ref;
  }

  shouldComponentUpdate({
    options, value, disabled, ...props
  }: Select2Props) {
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
            // eslint-disable-next-line @typescript-eslint/no-throw-literal
            throw BreakException;
          }
        });
    } catch (e) {
      // console.log(`Select2 with label ${this.props.label} will update because of callback`);
      return true;
    }
    return false;
  }

  componentDidUpdate({ value: oldValue, disabled: oldDisabled, options: oldOptions }: Select2Props) {
    // console.log(`Select2 with label ${this.props.label} did update`);
    const {
      value, multiple, disabled, options,
    } = this.props;
    const $ref = $((this.domRef as any));

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
          const jQueryEvent: string | null = this.toJQueryEvent(eventName);

          const handleEvent = (event: any, callback2: any) => {
            const value2 = this.getValue($ref.select2('data'), multiple);
            // eslint-disable-next-line no-param-reassign
            event.params = {};
            // eslint-disable-next-line no-param-reassign
            event.params.data = value2;
            callback2(event);
          };

          if (jQueryEvent !== null) {
            const actualCallback = (e: any) => { handleEvent(e, callback); };
            // Store bound event handler to be able to later remove it
            this.boundHandlers[eventName] = { callback, actualCallback, jQueryEvent };
            $ref.on(jQueryEvent as string, actualCallback);
          }
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
      $ref.val(currVal as string);
      $ref.trigger('select2:change');
    }
  }

  componentWillUnmount() {
    $(this.domRef as any)
      .select2('destroy');
  }

  handleSelect() {
    const { value: propValue, multiple } = this.props;
    const { $ref } = this;
    const newValue = this.getValue($ref.select2('data'), multiple);
    if (propValue && newValue !== propValue) {
      $ref.val(propValue).trigger('change.select2');
    }
  }

  getValue = (select2Options: any, multiple: any) => {
    let value = this.optionsFromSelect2(select2Options);
    if (!multiple && value.length > 0) {
      [value] = value;
    }
    return value;
  };

  optionsFromSelect2 = (select2Options: any) => select2Options.map(({ id }: { id: any }) => (this.mapped as Dictionary)[id].actual);

  optionsToSelect2 =
  (scopedOptions: any) => scopedOptions && scopedOptions.map(this.singleOptionToSelect2);

  singleOptionToSelect2 = (p: any) => {
    if (typeof p === 'object') {
      const { value: id, label: text, ...props } = p;
      return { id, text: text || id, ...props };
    }
    return { id: p, text: p };
  };

  domRef: HTMLSelectElement | null = null;

  boundHandlers: Dictionary = {};

  internalOptions = [];

  actualOptions = [];

  $ref?: any;

  mapped?: Dictionary = {};

  mapOptions(options: any) {
    this.actualOptions = options;
    this.internalOptions = this.optionsToSelect2(options);
    const mapped: Dictionary = {};
    options.forEach((p: any, i: number) => {
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
  toJQueryEvent(eventName: string): string | null {
    let jQueryEvent = null;
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

    const {
      iconLeft, iconRight, addonLeft, addonRight, size, checkboxLeft,
      checkboxLeftProps, checkboxRight, checkboxRightProps, radioLeft, radioLeftProps,
      radioRight, radioRightProps, buttonLeft, buttonRight, width, help,
    } = props;

    const {
      label, labelPosition, labelXs, labelSm, labelMd, labelLg,
      xs, sm, md, lg, labelIcon, type, labelClass,
    } = props;

    return (
      <InputWrapper
        iconLeft={iconLeft}
        iconRight={iconRight}
        addonLeft={addonLeft}
        addonRight={addonRight}
        size={size}
        checkboxLeft={checkboxLeft}
        checkboxLeftProps={checkboxLeftProps}
        checkboxRight={checkboxRight}
        checkboxRightProps={checkboxRightProps}
        radioLeft={radioLeft}
        radioLeftProps={radioLeftProps}
        radioRight={radioRight}
        radioRightProps={radioRightProps}
        buttonLeft={buttonLeft}
        buttonRight={buttonRight}
        width={width}
        help={help}
//
        label={label}
        labelPosition={labelPosition}
        labelXs={labelXs}
        labelSm={labelSm}
        labelMd={labelMd}
        labelLg={labelLg}
        name={name}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        labelIcon={labelIcon}
        type={type}
        labelClass={labelClass}
      >
        <select
          id={id}
          ref={(c) => { this.domRef = c; }}
          name={name}
          className="form-control"
          disabled={disabled}
          multiple={multiple}
          defaultValue={defaultValue}
          style={{ width: '100%' }}
          aria-label="select2-placeholder"
        />
      </InputWrapper>
    );
  }
}

export default Select2;
