/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer.js';
import mockData from '../../mockData/mockData';

describe('CardContainer', () => {
  let wrapper;
  const mockToggleTarget = jest.fn();

  it('should match snapshot when there are no cards to render', () => {
    wrapper = shallow(          
      <CardContainer cardsToRender={ [] }
                     toggleTarget={ mockToggleTarget }
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when there are cards to render', () => {
    wrapper = shallow(
      <CardContainer cardsToRender={ [ mockData.peopleData ] }
                     toggleTarget={ mockToggleTarget }
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
