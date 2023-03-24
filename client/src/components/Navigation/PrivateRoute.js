import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import PrivateRouteAuth from "./PrivateRoute-authenticated"
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
import Review from '../Review'
import ReviewEntertainment from '../ReviewEntertainment'
import ReviewHousing from '../ReviewHousing'
import ReviewRestaurant from '../ReviewRestaurant'
import Request from '../Request'
import RequestEnt from '../RequestEnt'
import RequestH from '../RequestH'
import RequestFood from '../RequestFood'
import About from '../About'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import SignOut from '../SignOut'

import MapRaptors from '../MapRaptors'
import MapRangers from '../MapRangers'
import MapKingPin from '../MapKingPin'
import MapAdventureRoom from '../MapAdventureRoom'
import MapClay from '../MapClay'
import MapPark from '../MapPark'
import MapCtrlV from '../MapCtrlV'
import MapGalaxy from '../MapGalaxy'
import MapPinUp from '../MapPinUp'
import MapChicopee from '../MapChicopee'
import MapButterfly from '../MapButterfly'
import MapCanoeing from '../MapCanoeing'

import MapElora from '../MapElora'
import MapFergus from '../MapFergus'
import MapIcon from '../MapIcon'
import MapSociety from '../MapSociety'
import MapAccomod8u from '../MapAccomod8u'
import MapMyRez from '../MapMyRez'
import MapKingST from '../MapKingST'
import MapUWP from '../MapUWP'
import MapVIP from '../MapVIP'
import MapREV from '../MapREV'
import MapMKV from '../MapMKV'
import MapV1 from '../MapV1'

import MapHarveys from '../MapHarveys'
import MapLobster from '../MapLobster'
import MapWilliams from '../MapWilliams'
import MapSubway from '../MapSubway'
import MapPub from '../MapPub'
import MapKorner from '../MapKorner'
import MapFresco from '../MapFresco'
import MapShawerma from '../MapShawerma'
import MapLazeez from '../MapLazeez'
import MapTims from '../MapTims'
import MapMels from '../MapMels'
import MapPita from '../MapPita'
import { AuthProvider, useAuth } from '../Firebase/context';


export default function PrivateRoute(
  {
    //authenticated,
    //...rest
  },
) {

  const { currentUser } = useAuth();
  return (
    <>
      <AuthProvider>
      <Router history={history}>
      <NavBar></NavBar>
        <Switch>
          <Route path="/Landing" exact component={Landing} />
          <PrivateRouteAuth path="/Food" exact component={Food} />
          <PrivateRouteAuth path="/Entertainment" exact component={Entertainment} />
          <PrivateRouteAuth path="/Housing" exact component={Housing} />
          <PrivateRouteAuth path="/Info" exact component={Info} />
          <Route path="/InfoRestaurant" exact component={InfoRestaurant} />
          <Route path="/InfoHousing" exact component={InfoHousing} />
          <Route path="/InfoEntertainment" exact component={InfoEntertainment} />
          <PrivateRouteAuth path="/Review" exact component={Review} />
          <Route path="/ReviewEntertainment" exact component={ReviewEntertainment} />
          <Route path="/ReviewHousing" exact component={ReviewHousing} />
          <Route path="/ReviewRestaurant" exact component={ReviewRestaurant} />
          <PrivateRouteAuth path="/Request" exact component={Request} />
          <Route path="/RequestEnt" exact component={RequestEnt} />
          <Route path="/RequestH" exact component={RequestH} />
          <Route path="/RequestFood" exact component={RequestFood} />
          <Route path="/About" exact component={About} />

          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/SignOut" exact component={SignOut} />

          <Route path="/MapEnt" exact component={MapEnt} />

          <Route path="/MapRaptors" exact component={MapRaptors} />
          <Route path="/MapRangers" exact component={MapRangers} />
          <Route path="/MapKingPin" exact component={MapKingPin} />
          <Route path="/MapAdventureRoom" exact component={MapAdventureRoom} />
          <Route path="/MapClay" exact component={MapClay} />
          <Route path="/MapPark" exact component={MapPark} />
          <Route path="/MapCtrlV" exact component={MapCtrlV} />
          <Route path="/MapGalaxy" exact component={MapGalaxy} />
          <Route path="/MapPinUp" exact component={MapPinUp} />
          <Route path="/MapChicopee" exact component={MapChicopee} />
          <Route path="/MapButterfly" exact component={MapButterfly} />
          <Route path="/MapCanoeing" exact component={MapCanoeing} />
          
          <Route path="/MapElora" exact component={MapElora} />
          <Route path="/MapFergus" exact component={MapFergus} />
          <Route path="/MapIcon" exact component={MapIcon} />
          <Route path="/MapSociety" exact component={MapSociety} />
          <Route path="/MapAccomod8u" exact component={MapAccomod8u} />
          <Route path="/MapMyRez" exact component={MapMyRez} />
          <Route path="/MapKingST" exact component={MapKingST} />
          <Route path="/MapUWP" exact component={MapUWP} />
          <Route path="/MapVIP" exact component={MapVIP} />
          <Route path="/MapREV" exact component={MapREV} />
          <Route path="/MapMKV" exact component={MapMKV} />
          <Route path="/MapV1" exact component={MapV1} />


          <Route path="/MapHarveys" exact component={MapHarveys} />
          <Route path="/MapLobster" exact component={MapLobster} />
          <Route path="/MapWilliams" exact component={MapWilliams} />
          <Route path="/MapSubway" exact component={MapSubway} />
          <Route path="/MapPub" exact component={MapPub} />
          <Route path="/MapKorner" exact component={MapKorner} />
          <Route path="/MapFresco" exact component={MapFresco} />
          <Route path="/MapShawerma" exact component={MapShawerma} />
          <Route path="/MapLazeez" exact component={MapLazeez} />
          <Route path="/MapTims" exact component={MapTims} />
          <Route path="/MapMels" exact component={MapMels} />
          <Route path="/MapPita" exact component={MapPita} />
         
          <Route path="*">
            <Redirect to="/Landing"/>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}
