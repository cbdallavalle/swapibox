import React, { Component } from 'react';
import swapiRepository from '../../helper.js';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import defaultCrawl from './defaultCrawl';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardsToRender: [],
      swapiRepo: {},
      targets: [],
      filmCrawl: defaultCrawl
    };
  }

  componentDidMount() {
    const swapiRepo = new swapiRepository();
    this.setState({ swapiRepo });
  }

  getFilmCrawl = async() => {
    const randomFilm = Math.floor(Math.random() * (7 - 1)) + 1;
    await this.state.swapiRepo.getFilmCrawl(randomFilm);
    this.setState({ filmCrawl: this.state.swapiRepo.filmCrawl });
  }

  renderCards = async(type) => {
    if (!this.state.swapiRepo[type].length) {
      await this.state.swapiRepo.cleanData(type);
    }
    this.setState({ cardsToRender: this.state.swapiRepo[type]});
  }

  toggleTarget = (target) => {
    if (!target.marked) {
      target.marked = 'marked';
      const targets = [...this.state.targets, target];
      this.setState({targets});
    } else {
      delete target.marked;
      let targets = this.state.targets
        .filter(targetObj => targetObj.name !== target.name);
      this.setState({targets});
    }
  }

  render() {
    return (
      <div className="App">
        <Nav 
          renderCards={ this.renderCards }
          getFilmCrawl={ this.getFilmCrawl } 
        />
        <Main 
          filmCrawl={ this.state.filmCrawl }
          cardsToRender={ this.state.cardsToRender } 
          targetsToRender={ this.state.targets }
          toggleTarget={ this.toggleTarget }
        />
      </div>
    );
  }
}

export default App;