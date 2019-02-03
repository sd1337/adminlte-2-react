import React, { Component } from 'react';
import { shallow } from '../Enzyme';

import Box from '../../content/Box';

describe('Box tests', () => {
  it('renders box', () => {
    const wrapper = shallow(<Box />);
    expect(wrapper.find('.box'));
  });
});
