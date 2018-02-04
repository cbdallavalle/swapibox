import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = ( { targetsToRender, toggleTarget } ) => {
  const targets = () => {
    if (!targetsToRender.length) {
      return (
        <article className="no-targets-cont">
          <h1 className="no-targets">No Targets Selected</h1>
        </article>
      );
    } else {
      return targetsToRender.map( (target, index) => {
        return (
          <Card 
            key={ index }
            card={ target }
            toggleTarget={ toggleTarget }
          />
        );
      });
    }
  };

  return (
    <section className='Favorites'>
      { targets() }
    </section>
  );
};

const { object, func, arrayOf } = PropTypes;

Favorites.propTypes = {
  targetsToRender: arrayOf(object).isRequired,
  toggleTarget: func.isRequired
};

export default Favorites;