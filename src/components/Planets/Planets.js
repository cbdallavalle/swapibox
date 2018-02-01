import React from 'react';
import vader from '../../styles/vader3.jpg';
import patience from '../../styles/patience.gif';
import target from '../../styles/bullseye.svg';
import './Planets.css';

const Planets = ({planetsToRender}) => {
  const planets = () => {
    if(!planetsToRender.length) {
      return (
        <section className="loading-container">
          <img src={patience} alt="Patience" id="patience" />
          <img src={vader} alt="Vader" id="vader" />
        </section>
      )
    } else {
      return planetsToRender.map(({name, terrain, population, climate}, i) => {
        return (
          <article className="cards" key={i}>
            <img className="target-img" src={target} alt="target" />
            <h2>{name}</h2>
            <hr />
            <h4><span>population: </span>{population}</h4>
            <h4><span>terrain: </span>{terrain}</h4>
            <h4><span>climate: </span>{climate}</h4>
          </article>
        )
      })
    }
  }

  return (
    <section className="Containers">
      { planets() }
    </section>
  )
}

export default Planets;