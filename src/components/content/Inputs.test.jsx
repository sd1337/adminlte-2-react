import React from 'react';
import { shallow, mount } from '../Enzyme';

import {
  Slider, Text, Checkbox, Radio, Select, Select2, Date, DateRange, ICheck,
} from './Inputs';

const Inputs = [
  // <Slider />,
  <Text />,
  <Checkbox />,
  <Radio />,
  <Select />,
  <Select2 />,
  <Date />,
  // <DateRange />,
  <ICheck />,
];

Inputs.forEach((p) => {
  describe('Input tests', () => {
    it('renders', () => {
      const wrapper = mount(p);
      // expect(wrapper.exists('input') || wrapper.exists('select')).toBe(true);
      expect(wrapper.exists('.input-group')).toBe(true);
      wrapper.unmount();
    });
    it('renders label', () => {
      const wrapper = mount(React.cloneElement(p, { label: 'input-label' }));
      expect(wrapper.exists('.form-group'));
    });
  });
});
