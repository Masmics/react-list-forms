import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders one color', () => {
    const wrapper = shallow(<Color name="#" hex="#000000" />);
    expect(wrapper).toMatchSnapshot();
  });
});
