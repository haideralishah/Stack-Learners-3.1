import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Navigation from './components/navigation';
import About from './containers/about';
import Home from './containers/home';
import Users from './containers/users';
import UserName from './containers/username';
import Signup from './containers/signup';
import Login from './containers/login';

function App() {
  const user = useSelector((auth) => auth.user)
  console.log(user, 'user');
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
            {user ? <Home /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;