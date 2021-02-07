import React from 'react';
import { shallow } from '../Enzyme';

import DataTable from './DataTable';

describe('Datatable tests', () => {
  it('renders datatable', () => {
    const wrapper = shallow(<DataTable />);
    expect(wrapper.exists('.box')).toBe(true);
    expect(wrapper.exists('.box-header')).toBe(false);
  });
  it('renders datatable', () => {
    const wrapper = shallow(<DataTable title="title" />);
    expect(wrapper.exists('.box-header')).toBe(true);
  });
});
