import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav.js';

describe('Nav', () => {

  it('should match the snapshot', () => {
    const mockRenderPeople = jest.fn();
    const mockRenderVehicles = jest.fn();
    const mockRenderPlanets = jest.fn();
    const wrapper = shallow(
      <Nav renderPeople={ mockRenderPeople } 
           renderVehicles={ mockRenderVehicles }
           renderPlanets={ mockRenderPlanets }
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})