import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import Home from '../Home';
import history from './history';
import Food from '../Food';
import Entertainment from '../Entertainment';
import Housing from '../Housing';
import NavBar from '../Navbar';
import Landing from '../Landing';
import Info from '../Info';
import InfoRestaurant from '../InfoRestaurant'
import InfoEntertainment from '../InfoEntertainment'
import InfoHousing from '../InfoHousing'




export default function PrivateRoute(
  {
    //authenticated,
    //...rest
  },
) {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/Landing" exact component={Landing} />
          <Route path="/Food" exact component={Food} />
          <Route path="/Entertainment" exact component={Entertainment} />
          <Route path="/Housing" exact component={Housing} />
          <Route path="/Info" exact component={Info} />
          <Route path="/InfoRestaurant" exact component={InfoRestaurant} />
          <Route path="/InfoHousing" exact component={InfoHousing} />
          <Route path="/InfoEntertainment" exact component={InfoEntertainment} />
          <Route path="*">
            <Redirect to="/Landing" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
