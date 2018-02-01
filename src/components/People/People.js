import React from 'react';
import vader from '../../styles/vader3.jpg';
import patience from '../../styles/patience.gif';
import target from '../../styles/bullseye.svg';
import './People.css';

const People = ({peopleToRender}) => {
  const people = () => {
    if(!peopleToRender.length) {
      return (
        <section className="loading-container">
          <img src={patience} alt="Patience" id="patience" />
          <img src={vader} alt="Patience" id="vader" />
        </section>
      )
    } else {
      return peopleToRender.map( ({name, homeworld, homePop, species}, i) => {
        return (
          <article className="cards" key={i}>
            <img className="target-img" src={target} alt="target" />
            <h2>{name}</h2>
            <hr />
            <h4><span>species:</span> {species}</h4>
            <h4><span>homeworld:</span> {homeworld}</h4>
            <h4><span>population:</span> {homePop}</h4>
          </article>
        )
  })
    }
  }



  return (
    <section className="Containers">
      { people() }
    </section>
  )
}

export default People;