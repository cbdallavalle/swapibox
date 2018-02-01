import React from 'react';
import { Switch, Route } from 'react-router-dom'
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Favorites from '../Favorites/Favorites';
import Home from '../Home/Home';
import './Main.css';

const Main = (props) => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/people' component={() => <People peopleToRender={ props.peopleToRender } /> } />
        <Route path='/planets' component={() => <Planets planetsToRender={ props.planetsToRender } /> } />
        <Route path='/vehicles' component={() => <Vehicles vehiclesToRender={ props.vehiclesToRender } /> } />
        <Route path='/targets' component={Favorites} />
      </Switch>
    </main>
  )
}

export default Main;