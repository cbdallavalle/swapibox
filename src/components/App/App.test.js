import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<BrowserRouter><App /></BrowserRouter>, {disableLifecycleMethods: true});
  expect(wrapper).toBeDefined();
});