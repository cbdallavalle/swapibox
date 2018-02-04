import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import empireImg from '../../styles/GalacticEmpire.png';
import people from '../../styles/people.svg';
import planet from '../../styles/earth-globe.svg';
import vehicle from '../../styles/star-wars.svg';
import target from '../../styles/bullseye.svg';
import deathStar from '../../styles/deathStar.png';
import './Nav.css';

const Nav = ({ renderCards, getFilmCrawl }) => {
  return (
    <nav>
      <div className="title-cont">
        <Link 
          to='/'
          onClick={ getFilmCrawl }
        >
          <img src={empireImg} alt="empire logo" id="empire-logo" />
          <h1>The Imperial Almanac</h1>
        </Link>
      </div>
      <div className="nav-btns-cont">
        <NavLink to='/people'>
          <button 
            id="people"
            onClick={ () => renderCards("people") }
          >
            <img className="nav-img" src={ people } alt="search people" />
          </button>
        </NavLink>
        <NavLink to='/planets'>
          <button onClick={ () => renderCards("planets") }>
            <img className="nav-img" src={ planet } alt="search people" />
          </button>
        </NavLink>
        <NavLink to='/vehicles'>
          <button onClick={ () => renderCards("vehicles") }>
            <img className="nav-img" src={ vehicle } alt="search people" />
          </button>
        </NavLink>
        <NavLink to='/targets'>
          <button id="targets"
          >
            <img className="nav-img" src={ target } alt="search people" />
          </button>
        </NavLink>
      </div>
      <img id="death-star" src={ deathStar } />
    </nav>
  );
};

const { func } = PropTypes;

Nav.propTypes = {
  renderCards: func.isRequired,
  getFilmCrawl: func.isRequired
};

export default Nav;