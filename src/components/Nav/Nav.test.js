/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav.js';

describe('Nav', () => {
  let wrapper;
  const mockRenderCards = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Nav renderCards={ mockRenderCards } 
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should trigger renderCards when clicked', () => {
    wrapper.find('#people').first().simulate('click');
    expect(mockRenderCards).toHaveBeenCalled();
  })
})