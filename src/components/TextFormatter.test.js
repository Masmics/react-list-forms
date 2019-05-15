import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('TextFormatter', () => {
  it('renders the text formatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot;
  });

  it('can change to the selected text color', () => {
    const wrapper = shallow(<TextFormatter />);
    wrapper.find('select').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('red');
  });
});
