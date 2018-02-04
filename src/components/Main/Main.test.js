/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Home from '../Home/Home';
import CardContainer from '../CardContainer/CardContainer';
import Favorites from '../Favorites/Favorites';
import Main from './Main';
import mockData from '../../mockData/mockData';

//is snapshot a better test here?

describe('Router', ()=> {
  const mockToggleTargets = jest.fn();
  const main = 
    <Main 
      filmCrawl={mockData.defaultState.filmCrawl}
      cardsToRender={ [] }
      targetsToRender={ [] }
      toggleTarget={ mockToggleTargets }
    />

  it('should display home when the exact path is /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ [ '/' ] }>
        {main}
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(CardContainer)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(0);
  });

  it('should display CardContainer when the path is /people', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/people' ]}>
        {main}
      </MemoryRouter>
    );
    expect(wrapper.find(CardContainer)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(0);
  });

  it('should display CardContainer when the path is /planets', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/planets' ]}>
        {main}
      </MemoryRouter>
    );
    expect(wrapper.find(CardContainer)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(0);
  });

  it('should display CardContainer when the path is /vehicles', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/vehicles' ]}>
        {main}
      </MemoryRouter>
    );
    expect(wrapper.find(CardContainer)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Favorites)).toHaveLength(0);
  });

  it('should display Favorites when the path is /targets', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/targets' ]}>
        {main}
      </MemoryRouter>
    );
    expect(wrapper.find(Favorites)).toHaveLength(1);
    expect(wrapper.find(CardContainer)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
  });
})