import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('displays a list of colors', () => {
    const wrapper = shallow(<Colors />);
    expect(wrapper).toMatchSnapshot();
  });
});

