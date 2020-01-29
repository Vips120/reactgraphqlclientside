import React from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from './components/navigation/nav';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import Home from './components/home/home';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
      <Route path="/" exact component={Signup} />
      <Route path="/signin" exact component={Signup} />
      <Route path="/signup" exact component={Signin} />
      <Route path="/home" exact component={Home}/>
      </Switch>
   </React.Fragment>
  );
}

export default App;
