import React from 'react';
import PropTypes from 'prop-types';
import vader from '../../styles/vader3.jpg';
import patience from '../../styles/patience.gif';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardsToRender, toggleTarget }) => {
  const cards = () => {
    if (!cardsToRender.length) {
      return (
        <section className="loading-container">
          <img src={patience} alt="Patience" id="patience" />
          <img src={vader} alt="Patience" id="vader" />
        </section>
      );
    } else {
      return cardsToRender.map( (card, index) => {
        return (
          <Card 
            key={ index }
            card={ card }
            toggleTarget={ toggleTarget }
          />
        );
      });
    }
  };
  
  return (
    <section className="CardContainer">
      { cards() }
    </section>
  );
};

const { object, func, arrayOf } = PropTypes;

CardContainer.propTypes = {
  cardsToRender: arrayOf(object).isRequired,
  toggleTarget: func.isRequired
};

export default CardContainer;