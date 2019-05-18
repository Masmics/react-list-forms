import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders one color', () => {
    const wrapper = shallow(<Color name="Green" hex="#008000" />);
    expect(wrapper).toMatchSnapshot();
  });
});
