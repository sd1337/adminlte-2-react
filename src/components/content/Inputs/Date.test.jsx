import React from 'react';
import moment from 'moment';
import { mount, fireEvent } from '../../Enzyme';

import Date from './Date';
import {
  simpleOptions, complexOptions, disabledOptions, getDOMNodeByClassName, getDOMNodeByQuerySelectorAll, getDOMNodeByQuerySelector,
} from './InputTestUtilities';

describe('Date tests', () => {
  it('renders', () => {
    const wrapper = mount(<Date />);
    expect(wrapper.exists('.SingleDatePicker')).toBeTruthy();
  });

  it('renders name', () => {
    const wrapper = mount(<Date name="unittest" />);
    expect(wrapper.exists('.DateInput_input[name="unittest"]')).toBeTruthy();
  });

  it('renders id', () => {
    const wrapper = mount(<Date id="unittest" />);
    expect(wrapper.exists('.DateInput_input#unittest')).toBeTruthy();
  });

  it('renders simple date', () => {
    const wrapper = mount(<Date value="2018-01-01" />);
    expect(wrapper.find('.DateInput_input').props().value).toBe('01/01/2018');
  });

  it('renders moment date', () => {
    const value = moment();
    const wrapper = mount(<Date value={value} />);
    expect(wrapper.find('.DateInput_input').props().value).toBe(value.format('MM/DD/YYYY'));
  });

  it('renders disabled', () => {
    const wrapper = mount(<Date disabled />);
    expect(wrapper.exists('.DateInput_input__disabled')).toBeTruthy();
  });

  it('changes to disabled', () => {
    const wrapper = mount(<Date />);
    expect(wrapper.exists('.DateInput_input__disabled')).toBeFalsy();
    wrapper.setProps({ disabled: true });
    expect(wrapper.exists('.DateInput_input__disabled')).toBeTruthy();
  });

  it('change to enabled', () => {
    const wrapper = mount(<Date disabled />);
    expect(wrapper.exists('.DateInput_input__disabled')).toBeTruthy();
    wrapper.setProps({ disabled: false });
    expect(wrapper.exists('.DateInput_input__disabled')).toBeFalsy();
  });

  it('accepts default value', () => {
    const wrapper = mount(<Date defaultValue="2018-01-01" />);
    expect(wrapper.find('.DateInput_input').props().value).toBe('01/01/2018');
  });

  it('triggers change and sets value', () => {
    const changeAction = jest.fn();
    const wrapper = mount(<Date onChange={changeAction} name="unittest" />);
    wrapper.find('.DateInput_input').simulate('focus');
    const inFiveDays = moment().add(5, 'days');
    const newDate = inFiveDays.format('YYYY-MM-DD');
    const resultFormat = inFiveDays.format('MM/DD/YYYY');
    wrapper.find('.DateInput_input').simulate('change', { target: { name: 'unittest', value: newDate } });
    expect(changeAction).toBeCalledTimes(1);
    expect(wrapper.find('.DateInput_input').props().value).toBe(resultFormat);
  });

  it('accepts custom format', () => {
    const value = moment();
    const format = 'DD.MM.YYY';
    const valueFormatted = value.format(format);
    const wrapper = mount(<Date value={value} format={format} />);
    expect(wrapper.find('.DateInput_input').props().value).toBe(valueFormatted);
  });

  it('changes value with moment object', () => {
    const today = moment();
    const inFiveDays = today.add(5, 'days');
    const wrapper = mount(<Date value={today} />);
    wrapper.setProps({ value: inFiveDays });
    const resultFormat = inFiveDays.format('MM/DD/YYYY');
    expect(wrapper.find('.DateInput_input').props().value).toBe(resultFormat);
  });

  it('changes to empty value', () => {
    const wrapper = mount(<Date value={moment()} />);
    wrapper.setProps({ value: null });
    expect(wrapper.find('.DateInput_input').props().value).toBeFalsy();
  });
});
