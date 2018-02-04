/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav.js';

describe('Nav', () => {
  let wrapper;
  const mockRenderCards = jest.fn();
  const mockGetFilmCrawl = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        renderCards={ mockRenderCards } 
        getFilmCrawl={ mockGetFilmCrawl }
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

  it('should trigger getFilmCrawl when Logo clicked', () => {
    wrapper.find('Link').simulate('click');
    expect(mockGetFilmCrawl).toHaveBeenCalled();
  })
})