import React, { Component } from 'react';
import swapiRepository from '../../helper.js';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {},
      vehicles: {}
    }
  }

  async componentDidMount() {
    const swapi = new swapiRepository();
    // await swapi.cleanPlanetData("https://swapi.co/api/planets/?page=1");
    await swapi.cleanPeopleData("https://swapi.co/api/people/?page=1");
    // await swapi.cleanVehicleData("https://swapi.co/api/vehicles/?page=1");
      // vehicles: swapi.vehicles
      // people: swapi.people, 
    this.setState({ people: swapi.people })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
