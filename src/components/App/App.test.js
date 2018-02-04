/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import mockData from '../../mockData/mockData'

describe('App state', () => {
  let wrapper;

  it('default state should be an empty object', () => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.state()).toEqual(mockData.defaultState);
  })
})

describe('App methods', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  
  it('should update state with an instance of swapiRepo on componentDidMount', () => {
    expect(wrapper.state()).toEqual(mockData.updateState);
  })

  it('should set state with cards to render if renderCards is called', async() => {
    await wrapper.instance().renderCards('vehicles');
    expect(wrapper.state().cardsToRender.length).toEqual(10)
  })

  it('should add or delete a target to the targets array if the target has or has not been previously marked', () => {
    wrapper.instance().toggleTarget(mockData.peopleData);
    expect(wrapper.state().targets.length).toEqual(1);

    wrapper.instance().toggleTarget(mockData.peopleData);
    expect(wrapper.state().targets.length).toEqual(0);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})