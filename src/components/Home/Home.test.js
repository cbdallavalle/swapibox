/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import mockData from '../../mockData/mockData';

it('should match the snapshot', () => {
  let wrapper = shallow(<Home filmCrawl={mockData.defaultState.filmCrawl}/>)
  expect(wrapper).toMatchSnapshot();
})