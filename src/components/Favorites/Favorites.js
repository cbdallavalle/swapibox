import React from 'react';
import './Favorites.css';

const Favorites = ({targetsToRender}) => {
  const targets = () => {
    if(!targetsToRender.length) {
      return (
        <article className="no-targets-cont">
          <h1 className="no-targets">No Targets Selected</h1>
        </article>
      )
    } else {
      return targetsToRender.map( ({name, species, homeworld, homePop, population, terrain, climate}, i) => {
        const person = () => {
          if(species) {
            return (
              <div>
              <h2>{name}</h2>
              <hr />
              <h4><span>species:</span> {species}</h4>
              <h4><span>homeworld:</span> {homeworld}</h4>
              <h4><span>population:</span> {homePop}</h4>
              </div>
            )
          } else {
            return (
              <div>
              <h2>{name}</h2>
              <hr />
              <h4><span>population: </span>{population}</h4>
              <h4><span>terrain: </span>{terrain}</h4>
              <h4><span>climate: </span>{climate}</h4>
              </div>
            )
          }
        }
        return (
          <article>
            { person() }

          </article>
        )
      })
    }
  }

  return(
    <section>
      { targets() }
    </section>
  )
}

export default Favorites;