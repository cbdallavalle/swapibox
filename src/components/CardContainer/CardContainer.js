import React from 'react';
import vader from '../../styles/vader3.jpg';
import patience from '../../styles/patience.gif';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardsToRender, toggleTarget }) => {
  const cards = () => {
    if(!cardsToRender.length) {
      return (
        <section className="loading-container">
          <img src={patience} alt="Patience" id="patience" />
          <img src={vader} alt="Patience" id="vader" />
        </section>
      )
    } else {
      return cardsToRender.map( (card, i) => {
        return (
          <Card key={ i }
                card={ card }
                toggleTarget={ toggleTarget }
          />
        )
      })
    }
  }
  
  return (
    <section className="CardContainer">
      { cards() }
    </section>
  )
}

export default CardContainer;