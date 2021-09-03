import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Home from './views/Home';
import BookDescription from './views/BookDescription/BookDescription';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/home'>
          <Home/>
      </Route>
      
      <Route path='/viewbook/:bookId'>
         <BookDescription/>
      </Route>

      <Route path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
)}

export default Router;