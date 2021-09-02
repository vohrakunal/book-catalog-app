import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Router from './Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
