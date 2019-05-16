import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders the sidebar', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot;
  });

  // it('can render bananas', () => {
  //   const wrapper = shallow(<Banana />);
  //   wrapper.find('select').at(0).simulate('select');
  //   expect(wrapper.state('color')).toEqual('black');
  // });
});
