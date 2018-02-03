import React from 'react';
import target from '../../styles/bullseye.svg';
import './Card.css';

const Card = ({card, toggleTarget }) => {
  console.log(card);
  const { name, species, homeworld, homePop, marked } = card;
  const { population, terrain, climate } = card;
  const { model, vehicleClass, passengers } = card

  const cardType = Object.keys(card.info).map( key => {
    return key !== "residents" ? 
      <h4><span>{key}:</span> {card.info[key]}</h4>
      :
      <ul><span>{key}</span> 
      {
        Object.values(card.info.residents).map( value => <li>{value.resident}</li>)
      }
      </ul>
  })

  // const cardType = () => {
  //   if(species) {
  //     return (
  //       <div>
  //         <img className="target-img" src={target} alt="target" />
  //         <h4><span>species:</span> {species}</h4>
  //         <h4><span>homeworld:</span> {homeworld}</h4>
  //         <h4><span>population:</span> {homePop}</h4>
  //       </div>
  //     )
  //   } 
  //   else if (terrain) {
  //     return (
  //       <div>
  //         <img className="target-img" src={target} alt="target" />
  //         <h4><span>population: </span>{population}</h4>
  //         <h4><span>terrain: </span>{terrain}</h4>
  //         <h4><span>climate: </span>{climate}</h4>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <h4><span>model:</span> {model}</h4>
  //         <h4><span>class:</span> {vehicleClass}</h4>
  //         <h4><span>passengers:</span> {passengers}</h4>
  //       </div>
  //     )
  //   }
  // }

  return (
    <article className="cards" 
             id={marked}
             onClick={ () => toggleTarget(card) }
    >
      <img className="target-img" src={target} alt="target" />
      <h2>{name}</h2>
      <hr />
      { cardType }
    </article>
  )
}

export default Card;