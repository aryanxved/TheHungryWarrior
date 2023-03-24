import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRouteAuth from "../Navigation/PrivateRoute-authenticated"
import Home from '../Home';
import Landing from '../Landing';
import SignIn from '../SignIn';
import PrivateRoute from '../Navigation/PrivateRoute.js';
import { AuthProvider, useAuth } from '../Firebase/context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Landing} />
        </div>
      </Router>
      </AuthProvider>
    );
  }
}

export default App;
