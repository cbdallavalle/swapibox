/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('should match the snapshot', () => {
  let wrapper = shallow(<Home />)
  expect(wrapper).toMatchSnapshot();
})