import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import SignInForm from '../SignIn';
import SignUpPage from '../SignUp';
import LandingPage from '../Landing';
import HomePage from '../Home';
import history from './history';
import NavBar from '../Navbar';
import { useAuth } from '../Firebase/context';

export default function PrivateRouteAuth({component: Component, ...rest}) {
  const { currentUser } = useAuth();
  return (
    <React.Fragment>
    <Route 
    {...rest}
    render = {
      (props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/SignIn" />
        )
      }
    }
 />
    </React.Fragment>
  );
}
