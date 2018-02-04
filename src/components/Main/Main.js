import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Home from '../Home/Home';
import './Main.css';

const Main = ({ cardsToRender, targetsToRender, toggleTarget }) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/people' component={ () => 
          <CardContainer 
            cardsToRender={ cardsToRender } 
            toggleTarget={ toggleTarget }
          /> } 
        />
        <Route path='/planets' component={() => 
          <CardContainer 
            cardsToRender={ cardsToRender } 
            toggleTarget={ toggleTarget }
          /> } 
        />
        <Route path='/vehicles' component={() => 
          <CardContainer 
            cardsToRender={ cardsToRender } 
            toggleTarget={ () => {} }
          /> } 
        />
        <Route path='/targets' component={() => 
          <Favorites 
            targetsToRender={ targetsToRender } 
            toggleTarget={ toggleTarget }
          /> } 
        />
      </Switch>
    </main>
  );
};

const { object, func, arrayOf } = PropTypes;

Main.propTypes = {
  cardsToRender: arrayOf(object).isRequired,
  targetsToRender: arrayOf(object).isRequired,
  toggleTarget: func.isRequired
};

export default Main;