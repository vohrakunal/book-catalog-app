import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Home from './views/Home';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/home'>
          <Home/>
      </Route>

      <Route path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
)}

export default Router;