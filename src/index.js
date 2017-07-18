import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Router,browserHistory} from 'react-router';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
render(
  <Router history={browserHistory} routes={routes}></Router>,
  document.getElementById("app")
);
