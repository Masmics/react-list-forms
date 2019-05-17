import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', () => {
  it('creates a new color', () => {
    const wrapper = shallow(<CreateColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
