import React from 'react';
import { shallow, mount } from '../Enzyme';

import {
  Slider, Text, Checkbox, Radio, Select, Select2, Date, DateRange, ICheck,
} from './Inputs';

const Inputs = [
  <Slider />,
  <Text />,
  <Checkbox />,
  <Radio />,
  <Select />,
  // <Select2 />,
  <Date />,
  <DateRange />,
  <ICheck />,
];

Inputs.forEach((p) => {
  describe('Input tests', () => {
    it('renders', () => {
      const wrapper = mount(p);
      expect(wrapper.find('input')).toBeDefined();
    })
  });
});
