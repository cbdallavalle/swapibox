import React from 'react';
import vader from '../../styles/vader3.jpg';
import patience from '../../styles/patience.gif';

import './Vehicles.css';

const Vehicles = ({vehiclesToRender}) => {

  const vehicles = () => {
    if(!vehiclesToRender.length) {
      return (
        <section className="loading-container">
          <img src={patience} alt="Patience" id="patience" />
          <img src={vader} alt="Patience" id="vader" />
        </section>
      )
    } else {
      return vehiclesToRender.map( ({name, model, vehicleClass, passengers}, i) => {
        return (
          <article className="cards" key={i}>
            <h2>{name}</h2>
            <hr />
            <h4><span>model:</span> {model}</h4>
            <h4><span>class:</span> {vehicleClass}</h4>
            <h4><span>passengers:</span> {passengers}</h4>
          </article>
        )
      })
    }
  }

  return (
    <section className="Containers">
      { vehicles() }
    </section>
  )
}

export default Vehicles;