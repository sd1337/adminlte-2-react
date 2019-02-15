import React from 'react';
import { mount, fireEvent } from '../../Enzyme';

import Select2 from './Select2';
import {
  simpleOptions, complexOptions, disabledOptions, getDOMNodeByClassName, getDOMNodeByQuerySelectorAll, getDOMNodeByQuerySelector,
} from './InputTestUtilities';

import $ from 'jquery';

jest.dontMock('jquery');


describe('Select2 tests', () => {
  const getSelect2Container = p => getDOMNodeByClassName(p, 'select2-container');
  const getSelect2Selection = p => getDOMNodeByQuerySelector(p, '.select2-selection__rendered');
  const getHiddenAccessible = p => getDOMNodeByClassName(p, 'select2-hidden-accessible');
  const getHiddenOptions = p => getDOMNodeByQuerySelectorAll(p, '.select2-hidden-accessible option');
  const openDropdown = p => fireEvent(getSelect2Selection(p), 'mousedown');

  it('renders', () => {
    const wrapper = mount(<Select2 />);
    expect(getSelect2Container(wrapper).length).toBe(1);
  });

  it('renders name', () => {
    const wrapper = mount(<Select2 name="unittest" />);
    expect(wrapper.exists('select[name="unittest"]')).toBe(true);
  });

  it('renders id', () => {
    const wrapper = mount(<Select2 id="unittest" />);
    expect(wrapper.exists('#unittest')).toBe(true);
  });

  it('renders simple options', () => {
    const wrapper = mount(<Select2 options={simpleOptions} />);
    expect(getHiddenOptions(wrapper).length).toBe(2);
  });

  it('renders complex options', () => {
    const wrapper = mount(<Select2 options={complexOptions} />);
    expect(getHiddenOptions(wrapper).length).toBe(2);
  });

  it('opens dropdown on click', () => {
    const wrapper = mount(<Select2 options={simpleOptions} />);
    openDropdown(wrapper);
    expect(document.getElementsByClassName('select2-dropdown').length).toBe(1);
    expect(document.querySelectorAll('.select2-results > .select2-results__options > .select2-results__option').length).toBe(2);
  });

  it('renders disabled options', () => {
  });

  it('changes to disabled options', () => {
  });

  it('renders disabled', () => {
  });

  it('renders change to disabled', () => {
  });

  it('renders change to enabled', () => {
  });

  it('accepts default value', () => {
  });

  it('renders selected value with simple option', () => {
    const changeAction = jest.fn();
    const wrapper = mount(<Select2 options={simpleOptions} />);
    wrapper.setProps({ value: 'a' });
    expect(getSelect2Selection(wrapper).textContent).toBe('a');
    wrapper.setProps({ value: 'b' });
    expect(getSelect2Selection(wrapper).textContent).toBe('b');
    // wrapper.setProps({ value: null });
    // expect(getSelect2Selection(wrapper).textContent).toBe('');
    // const domResult = getSelect2Selection(wrapper).textContent;
  });

  it('renders selected value with complex option', () => {
  });

  // it('changes value on click', () => {
  //   const changeAction = jest.fn();
  //   const wrapper = mount(<Select2 options={simpleOptions} onChange={changeAction} />);
  //   openDropdown(wrapper);
  //   fireEvent(document.querySelectorAll('.select2-results > .select2-results__options > .select2-results__option')[1], 'mouseover');
  //   fireEvent(document.querySelectorAll('.select2-results > .select2-results__options > .select2-results__option')[1], 'mouseup');
  //   expect(changeAction).toHaveBeenCalledTimes(1);
  //   // expect(document.querySelectorAll('.select2-results > .select2-results__options > .select2-results__option')[0]).toBe(2);
  // });
});
