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
          <Route path="*">
            <Redirect to="/Landing" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
