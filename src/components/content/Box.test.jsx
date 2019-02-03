import React from 'react';
import { shallow } from '../Enzyme';

import Box from './Box';

describe('Box tests', () => {
  it('renders box', () => {
    const wrapper = shallow(<Box />);
    expect(wrapper.exists('.box')).toBe(true);
    expect(wrapper.exists('.box-header')).toBe(false);
  });
  it('renders header', () => {
    const wrapper = shallow(<Box title="title" />);
    expect(wrapper.exists('.box-header')).toBe(true);
  });
});
