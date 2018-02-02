import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites.js';
import mockData from '../../mockData/mockData';

describe('Favorites', () => {
  let wrapper;
  const mockToggleTargets = jest.fn();

  it('should match the snapshot when there are no cards to render', () => {
    wrapper = shallow(
      <Favorites targetsToRender={[]} 
                 toggleTargets={ mockToggleTargets }
      />
    )
  })

  it('should match the snapshot when there are cards to render', () => {
    wrapper = shallow(
      <Favorites targetsToRender={[ mockData.peopleData ]} 
                 toggleTargets={ mockToggleTargets }
      />
    )
  })
})