import React from 'react';
import { mount, fireEvent } from '../../Enzyme';

import ICheck from './ICheck';
import { simpleOptions, complexOptions, disabledOptions } from './InputTestUtilities';

// jest.dontMock('jquery');


describe('ICheck tests', () => {
  const getDOMNodes = p => p.getDOMNode().getElementsByClassName('iradio_minimal-blue');
  const getDisabledDOMNode = p => p.getDOMNode().querySelector('.iradio_minimal-blue.disabled');
  const getAllDisabledDOMNodes = p => p.getDOMNode().querySelectorAll('.iradio_minimal-blue.disabled');
  const getCheckedDOMNodes = p => p.getDOMNode().querySelector('.iradio_minimal-blue.checked');
  const getCheckedDOMNodeValues = p => getCheckedDOMNodes(p).querySelector('.a2r-icheck').value;

  it('renders', () => {
    const wrapper = mount(<ICheck />);
    expect(wrapper.exists('.a2r-icheck')).toBe(true);
    expect(getDOMNodes(wrapper).length > 0).toBe(true);
    // expect(wrapper.exists('.box-header')).toBe(false);
  });

  it('renders name', () => {
    const wrapper = mount(<ICheck name="unittest" options={simpleOptions} />);
    expect(wrapper.find('input[name="unittest"]').length).toBe(2);
  });

  it('renders simple options', () => {
    const wrapper = mount(<ICheck options={simpleOptions} />);
    const inputs = wrapper.find('input');
    const labels = wrapper.find('label span');

    expect(labels.at(0).text()).toBe(' a');
    expect(inputs.at(0).props().value).toBe('a');
    expect(labels.at(1).text()).toBe(' b');
    expect(inputs.at(1).props().value).toBe('b');
    expect(getDOMNodes(wrapper).length === 2).toBe(true);
  });

  it('renders complex options', () => {
    const wrapper = mount(<ICheck options={complexOptions} />);
    const inputs = wrapper.find('input');
    const labels = wrapper.find('label span');

    expect(labels.at(0).text()).toBe(' aText');
    expect(inputs.at(0).props().value).toBe('aValue');
    expect(labels.at(1).text()).toBe(' bText');
    expect(inputs.at(1).props().value).toBe('bValue');
    expect(getDOMNodes(wrapper).length === 2).toBe(true);
  });

  it('renders disabled options', () => {
    const wrapper = mount(<ICheck options={disabledOptions} />);
    const inputs = wrapper.find('input');

    expect(inputs.at(1).props().value).toBe('b');
    expect(inputs.at(1).props().disabled).toBe(true);
    expect(getDisabledDOMNode(wrapper).querySelector('.a2r-icheck').value).toBe('b');
  });

  it('changes to disabled options', () => {
    const wrapper = mount(<ICheck options={simpleOptions} />);
    wrapper.setProps({ options: disabledOptions });
    wrapper.update();

    const inputs = wrapper.find('input');

    expect(inputs.at(1).props().value).toBe('b');
    expect(inputs.at(1).props().disabled).toBe(true);
    expect(getDisabledDOMNode(wrapper).querySelector('.a2r-icheck').value).toBe('b');
  });

  it('renders disabled', () => {
    const wrapper = mount(<ICheck options={simpleOptions} disabled />);
    const inputs = wrapper.find('input');

    expect(inputs.at(0).props().disabled).toBe(true);
    expect(inputs.at(1).props().disabled).toBe(true);
    expect(getAllDisabledDOMNodes(wrapper).length).toBe(2);
  });

  it('renders change to disabled', () => {
    const wrapper = mount(<ICheck options={simpleOptions} />);
    wrapper.setProps({ disabled: true });
    wrapper.update();

    const inputs = wrapper.find('input');

    expect(inputs.at(0).props().disabled).toBe(true);
    expect(inputs.at(1).props().disabled).toBe(true);
    expect(getAllDisabledDOMNodes(wrapper).length).toBe(2);
  });

  it('renders change to enabled', () => {
    const wrapper = mount(<ICheck options={simpleOptions} disabled />);
    wrapper.setProps({ disabled: false });
    wrapper.update();

    const inputs = wrapper.find('input');

    expect(inputs.at(0).props().disabled).toBe(false);
    expect(inputs.at(1).props().disabled).toBe(false);
    expect(getAllDisabledDOMNodes(wrapper).length).toBe(0);
    expect(getDOMNodes(wrapper).length).toBe(2);
  });

  it('accepts default value', () => {
    const wrapper = mount(<ICheck options={simpleOptions} defaultValue="a" />);
    const inputs = wrapper.find('input');
    expect(getCheckedDOMNodeValues(wrapper)).toBe('a');
    expect(inputs.at(0).props().checked).toBe(true);
  });

  it('renders selected value with simple option', () => {
    const wrapper = mount(<ICheck options={simpleOptions} value="a" onChange={() => { }} />);
    {
      const inputs = wrapper.find('input');
      expect(getCheckedDOMNodeValues(wrapper)).toBe('a');
      expect(inputs.at(0).props().checked).toBe(true);
    }
    wrapper.setProps({ value: 'b' });
    wrapper.update();
    {
      const inputs = wrapper.find('input');
      expect(getCheckedDOMNodeValues(wrapper)).toBe('b');
      expect(inputs.at(1).props().checked).toBe(true);
    }
  });

  it('renders selected value with complex option', () => {
    const wrapper = mount(<ICheck options={complexOptions} value="bValue" onChange={() => { }} />);
    {
      const inputs = wrapper.find('input');
      expect(getCheckedDOMNodeValues(wrapper)).toBe('bValue');
      expect(inputs.at(1).props().checked).toBe(true);
    }
    wrapper.setProps({ value: 'aValue' });
    wrapper.update();
    {
      const inputs = wrapper.find('input');
      expect(getCheckedDOMNodeValues(wrapper)).toBe('aValue');
      expect(inputs.at(0).props().checked).toBe(true);
    }
  });

  it('changes value on click', () => {
    const changeAction = jest.fn();
    const wrapper = mount(<ICheck options={simpleOptions} onChange={changeAction} />);
    const domNode = getDOMNodes(wrapper);
    // click on first radio button
    {
      fireEvent(domNode[0], 'click');
      wrapper.update();
      expect(changeAction).toHaveBeenCalledTimes(1);
      const inputs = wrapper.find('input');
      expect(getCheckedDOMNodeValues(wrapper)).toBe('a');
      expect(inputs.at(0).props().checked).toBe(true);
    }
    // click again on same
    fireEvent(domNode[0], 'click');
    expect(changeAction).toHaveBeenCalledTimes(1);

    // click on other radio
    {
      fireEvent(domNode[1], 'click');
      wrapper.update();
      expect(changeAction).toHaveBeenCalledTimes(2);
      const inputs = wrapper.find('input');
      expect(getCheckedDOMNodeValues(wrapper)).toBe('b');
      expect(inputs.at(1).props().checked).toBe(true);
    }
  });
});
