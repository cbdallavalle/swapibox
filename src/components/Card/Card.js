import React from 'react';
import target from '../../styles/bullseye.svg';

const Card = ({card, addTarget}) => {
  const { name, species, homeworld, homePop } = card;
  const { population, terrain, climate } = card;
  const { model, vehicleClass, passengers } = card

  const cardType = () => {
    if(species) {
      return (
        <div>
          <img className="target-img" src={target} alt="target" />
          <h4><span>species:</span> {species}</h4>
          <h4><span>homeworld:</span> {homeworld}</h4>
          <h4><span>population:</span> {homePop}</h4>
        </div>
      )
    } else if (terrain) {
      return (
        <div>
          <img className="target-img" src={target} alt="target" />
          <h4><span>population: </span>{population}</h4>
          <h4><span>terrain: </span>{terrain}</h4>
          <h4><span>climate: </span>{climate}</h4>
        </div>
      )
    } else {
      return (
        <div>
          <h4><span>model:</span> {model}</h4>
          <h4><span>class:</span> {vehicleClass}</h4>
          <h4><span>passengers:</span> {passengers}</h4>
        </div>
      )
    }
  }

  return (
    <article className="cards" 
             onClick={ () => addTarget(card) }
    >
      <h2>{name}</h2>
      <hr />
      { cardType() }
    </article>
  )
}

export default Card;