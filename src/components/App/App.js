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

  async componentDidMount() {
    const swapiRepo = new swapiRepository();
    this.setState({ swapiRepo })
  }

  renderCards = async(type) => {
    if(!this.state.swapiRepo[type].length) {
      await this.state.swapiRepo.cleanData(type)
    }
    this.setState({ cardsToRender: this.state.swapiRepo[type]})
  }
  
  // renderPeople = async() => {
  //   if(!this.state.swapiRepo.people.length) {
  //     await this.state.swapiRepo.cleanPeopleData("https://swapi.co/api/people/?page=1"); 
  //   }
  //   this.setState({ cardsToRender: this.state.swapiRepo.people });
  // }

  // renderVehicles = async() => {
  //   if(!this.state.swapiRepo.vehicles.length) {
  //     await this.state.swapiRepo.cleanVehicleData("https://swapi.co/api/vehicles/?page=1")
  //   }
  //   this.setState({ cardsToRender: this.state.swapiRepo.vehicles });
  // }

  // renderPlanets = async() => {
  //   if(!this.state.swapiRepo.planets.length) {
  //     await this.state.swapiRepo.cleanPlanetData("https://swapi.co/api/planets/?page=1");
  //   }
  //   this.setState({ cardsToRender: this.state.swapiRepo.planets });
  // }

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
    console.log(this.state)
    return (
      <div className="App">
        <Nav renderCards={ this.renderCards } 
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
