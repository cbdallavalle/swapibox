import React from 'react';
import Card from '../Card/Card';
import './Favorites.css';

const Favorites = ( { targetsToRender, toggleTarget } ) => {
  const targets = () => {
    if(!targetsToRender.length) {
      return (
        <article className="no-targets-cont">
          <h1 className="no-targets">No Targets Selected</h1>
        </article>
      )
    } else {
      return targetsToRender.map( (target, i) => {
        return (
          <Card key={ i }
                card={ target }
                toggleTarget={ toggleTarget }
          />
        )
      })
    }
  }

  return(
    <section className='Containers'>
      { targets() }
    </section>
  )
}

export default Favorites;