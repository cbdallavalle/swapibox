import React from 'react';
import PropTypes from 'prop-types';
import target from '../../styles/bullseye.svg';
import './Card.css';

const Card = ({card, toggleTarget }) => {
  const { marked, name } = card;
  let cardType;
  let displayTarget;

  !card.info.model ? (cardType = 'clickable', displayTarget = 'displayTarget')
    :(displayTarget = 'noTargetDisplay', cardType = 'notClickable');

  const cardInfo = Object.keys(card.info).map( (key, index) => {
    return <h4 key={ index }><span>{ key }:</span> { card.info[key] }</h4>;    
  });

  return (
    <article 
      className={`cards ${ cardType }`}
      id={ marked }
      onClick={ () => toggleTarget(card) }
    >
      <img 
        className="target-img" 
        src={ target } 
        alt="target" 
        id={ displayTarget } 
      />
      <h2>{ name }</h2>
      <hr />
      { cardInfo }
    </article>
  );
};

const { func, shape, string, objectOf } = PropTypes;

Card.propTypes = {
  card: shape({
    name: string.isRequired,
    info: objectOf(string.isRequired).isRequired,
    marked: string
  }),
  toggleTarget: func.isRequired
};

export default Card;