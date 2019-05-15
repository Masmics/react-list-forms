import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('TextFormatter', () => {
  it('renders the text formatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot;
  });

  it('can render the default text color', () => {
    const wrapper = shallow(<TextFormatter />);
    wrapper.find('select').at(0).simulate('select');
    expect(wrapper.state('color')).toEqual('black');
  });
});
