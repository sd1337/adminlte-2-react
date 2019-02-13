import React from 'react';
import { mount } from '../../Enzyme';

import ICheck from './ICheck';

// jest.dontMock('jquery');

const simpleOptions = ['a', 'b'];
const complexOptions = [{ text: 'aText', value: 'aValue' }, { text: 'bText', value: 'bValue' }]

describe('ICheck tests', () => {
  it('renders icheck', () => {
    const wrapper = mount(<ICheck />);
    expect(wrapper.exists('.a2r-icheck')).toBe(true);
    expect(wrapper.getDOMNode().getElementsByClassName('iradio_minimal-blue').length > 0).toBe(true);
    // expect(wrapper.exists('.box-header')).toBe(false);
  });

  it('renders simple options', () => {
    const wrapper = mount(<ICheck options={simpleOptions} />);
    const inputs = wrapper.find('input');
    const labels = wrapper.find('label span');

    expect(labels.at(0).text()).toBe(' a');
    expect(inputs.at(0).props().value).toBe('a');
    expect(labels.at(1).text()).toBe(' b');
    expect(inputs.at(1).props().value).toBe('b');
    expect(wrapper.getDOMNode().getElementsByClassName('iradio_minimal-blue').length === 2).toBe(true);
  });

  it('renders complex options', () => {
    const wrapper = mount(<ICheck options={complexOptions} />);
    const inputs = wrapper.find('input');
    const labels = wrapper.find('label span');

    expect(labels.at(0).text()).toBe(' aText');
    expect(inputs.at(0).props().value).toBe('aValue');
    expect(labels.at(1).text()).toBe(' bText');
    expect(inputs.at(1).props().value).toBe('bValue');
    expect(wrapper.getDOMNode().getElementsByClassName('iradio_minimal-blue').length === 2).toBe(true);
  });

  it('renders selected value with simple option', () => {
    const wrapper = mount(<ICheck options={simpleOptions} value="a" onChange={() => { }} />);
    {
      const inputs = wrapper.find('input');
      const domNode = wrapper.getDOMNode().querySelector('.iradio_minimal-blue.checked');
      expect(domNode.querySelector('.a2r-icheck').value).toBe('a');
      expect(inputs.at(0).props().checked).toBe(true);
    }
    wrapper.setProps({ value: 'b' });
    wrapper.update();
    {
      const inputs = wrapper.find('input');
      const domNode = wrapper.getDOMNode().querySelector('.iradio_minimal-blue.checked');
      expect(domNode.querySelector('.a2r-icheck').value).toBe('b');
      expect(inputs.at(1).props().checked).toBe(true);
    }
  });

  it('renders selected value with complex option', () => {
    const wrapper = mount(<ICheck options={complexOptions} value="bValue" onChange={() => { }} />);
    const inputs = wrapper.find('input');
    const domNode = wrapper.getDOMNode().querySelector('.iradio_minimal-blue.checked');
    expect(domNode.querySelector('.a2r-icheck').value).toBe('bValue');
    expect(inputs.at(1).props().checked).toBe(true);
  });
});
