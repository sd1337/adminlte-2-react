import React from 'react';
import { mount } from '../../Enzyme';

import Select2 from './Select2';

describe('Select2 tests', () => {
  it('renders', () => {
    const wrapper = mount(<Select2 />);
    expect(wrapper.exists('select')).toBe(true);
  });
  it('renders id', () => {
    const wrapper = mount(<Select2 id="testing-id" />);
    expect(wrapper.exists('#testing-id')).toBe(true);
  });
});
