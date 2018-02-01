import React, { Component } from 'react';
import swapiRepository from '../../helper.js';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peopleToRender: [],
      vehiclesToRender: [],
      planetsToRender: [],
      swapiRepo: {},
    }
  }

  componentDidMount() {
    const swapiRepo = new swapiRepository();
    this.setState({ swapiRepo })
  }

  renderPeople = async() => {
    if(!this.state.peopleToRender.length) {
      await this.state.swapiRepo.cleanPeopleData("https://swapi.co/api/people/?page=1"); 
    }
    this.setState({ peopleToRender: this.state.swapiRepo.people });
  }

  renderVehicles = async() => {
    if(!this.state.vehiclesToRender.length) {
      await this.state.swapiRepo.cleanVehicleData("https://swapi.co/api/vehicles/?page=1")
    }
    this.setState({ vehiclesToRender: this.state.swapiRepo.vehicles });
  }

  renderPlanets = async() => {
    if(!this.state.planetsToRender.length) {
      await this.state.swapiRepo.cleanPlanetData("https://swapi.co/api/planets/?page=1");
    }
    this.setState({ planetsToRender: this.state.swapiRepo.planets });
  }

  render() {
    return (
      <div className="App">
        <Nav renderPeople={ this.renderPeople } 
             renderVehicles={ this.renderVehicles }
             renderPlanets={ this.renderPlanets }
        />
        <Main peopleToRender={ this.state.peopleToRender } 
              vehiclesToRender={ this.state.vehiclesToRender }
              planetsToRender={ this.state.planetsToRender }
        />
      </div>
    );
  }
}

export default App;
