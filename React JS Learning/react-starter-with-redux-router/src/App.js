import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './components/navigation';
import About from './containers/about';
import Home from './containers/home';
import AppointmentBook from './containers/appointmentbook';

import Users from './containers/users';
import UserName from './containers/username';
import Signup from './containers/signup';
import Login from './containers/login';
import * as firebase from 'firebase';
import { USER_REGISTERED } from './Store/constant/ActionTypes';
import { fetchUserInfo } from './Store/action/auth'

function App() {
  const user = useSelector(({ auth }) => auth.user)
  // console.log(user, 'user');
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      // console.log('login state changed ---------------', auth);
      if (auth) {
        dispatch(fetchUserInfo(auth.uid));
      }
    })
  }, []);


  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/user-name">
            <UserName />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
<Route path="/">
            <Home />
          </Route> */}


          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            {user ? <AppointmentBook /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
