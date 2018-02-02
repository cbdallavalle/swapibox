import React, { Component } from 'react';
import swapiRepository from '../../helper.js';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: [],
      swapiRepo: {},
      targets: [],
    }
  }

  componentDidMount() {
    const swapiRepo = new swapiRepository();
    this.setState({ swapiRepo })
  }
  
  renderPeople = async() => {
    if(!this.state.swapiRepo.people.length) {
      await this.state.swapiRepo.cleanPeopleData("https://swapi.co/api/people/?page=1"); 
    }
    this.setState({ cardsToRender: this.state.swapiRepo.people });
  }

  renderVehicles = async() => {
    if(!this.state.swapiRepo.vehicles.length) {
      await this.state.swapiRepo.cleanVehicleData("https://swapi.co/api/vehicles/?page=1")
    }
    this.setState({ cardsToRender: this.state.swapiRepo.vehicles });
  }

  renderPlanets = async() => {
    if(!this.state.swapiRepo.planets.length) {
      await this.state.swapiRepo.cleanPlanetData("https://swapi.co/api/planets/?page=1");
    }
    this.setState({ cardsToRender: this.state.swapiRepo.planets });
  }

  toggleTarget = (target) => {
    if(!target.marked) {
      target.marked = 'marked';
      const targets = [...this.state.targets, target];
      this.setState({targets})
    } else {
        delete target.marked;
        let targets = this.state.targets.filter(obj => obj.name !== target.name)
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
        <Main cardsToRender={ this.state.cardsToRender } 
              targetsToRender={ this.state.targets }
              toggleTarget={ this.toggleTarget }
        />
      </div>
    );
  }
}

export default App;
