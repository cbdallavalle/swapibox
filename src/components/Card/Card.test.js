/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';
import mockData from '../../mockData/mockData';

describe('Card', () => {
  let wrapper;
  const mockToggleTarget = jest.fn();

  it('should match snapshot when passed data for people', () => {
    wrapper = shallow(          
      <Card key={ 1 }
            card={ mockData.peopleData }
            toggleTarget={ mockToggleTarget }
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when passed data for planets', () => {
    wrapper = shallow(          
      <Card key={ 1 }
            card={ mockData.planetData }
            toggleTarget={ mockToggleTarget }
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when passed data for vehicles', () => {
    wrapper = shallow(          
      <Card key={ 1 }
            card={ mockData.vehicleData }
            toggleTarget={ mockToggleTarget }
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('when a card is clicked, should call toggleTarget', () => {
    wrapper = shallow(          
      <Card key={ 1 }
            card={ mockData.planetData }
            toggleTarget={ mockToggleTarget }
      />
    )
    wrapper.find('article').simulate('click');
    expect(mockToggleTarget).toHaveBeenCalled();
  })
})