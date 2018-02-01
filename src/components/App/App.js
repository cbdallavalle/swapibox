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
      targets: [],
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

  addTarget = (target) => {
    if(!(this.state.targets.find(obj => obj.name === target.name))) {
      const targets = [...this.state.targets, target];
      this.setState({targets})
    }
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
              targetsToRender={ this.state.targets }
              addTarget={ this.addTarget }
        />
      </div>
    );
  }
}

export default App;
