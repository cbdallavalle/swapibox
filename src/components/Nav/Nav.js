import React from 'react';
import { Link, Router } from 'react-router-dom';
import empireImg from '../../styles/GalacticEmpire.png';
import people from '../../styles/people.svg';
import planet from '../../styles/earth-globe.svg';
import vehicle from '../../styles/star-wars.svg';
import target from '../../styles/bullseye.svg';
import deathStar from '../../styles/deathStar.png';
import './Nav.css';

const Nav = (props) => {
  return(
    <nav>
    <div className="title-cont">
      <Link to='/'>
        <img src={empireImg} alt="empire logo" id="empire-logo" />
        <h1>The Imperial Almanac</h1>
      </Link>
    </div>
      <div className="nav-btns-cont">
        <button id="people"
                onClick={ props.renderPeople }
        >
          <Link to='/people'>
            <img className="nav-img" src={people} alt="search people" />
          </Link>
        </button>
        <button onClick={ props.renderPlanets }>
          <Link to='/planets'>
            <img className="nav-img" src={planet} alt="search people" />
          </Link>
        </button>
        <button onClick={ props.renderVehicles }>
          <Link to='/vehicles'>
            <img className="nav-img" src={vehicle} alt="search people" />
          </Link>
        </button>
        <button id="targets"
        >
          <Link to='/targets'>
            <img className="nav-img" src={target} alt="search people" />
          </Link>
        </button>
      </div>
    <img id="death-star" src={deathStar} />
    </nav>
  )
}

export default Nav;