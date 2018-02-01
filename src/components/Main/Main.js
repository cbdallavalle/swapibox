import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Home from '../Home/Home';
import './Main.css';


const Main = (props) => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/people' component={ () => 
          <CardContainer cardsToRender={ props.peopleToRender } 
                         addTarget={ props.addTarget }
          /> } 
        />
        <Route path='/planets' component={() => 
          <CardContainer cardsToRender={ props.planetsToRender } 
                         addTarget={ props.addTarget }
          /> } 
        />
        <Route path='/vehicles' component={() => 
          <CardContainer cardsToRender={ props.vehiclesToRender } /> } 
        />
        <Route path='/targets' component={() => 
          <Favorites targetsToRender={ props.targetsToRender } /> } 
        />
      </Switch>
    </main>
  )
}

export default Main;