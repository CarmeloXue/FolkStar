import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Router,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configStore from "./store/configStore";
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/rd-navbar.css';
import '../node_modules/swiper/dist/js/swiper.jquery.min';
import '../node_modules/swiper/dist/css/swiper.min.css';


let store = configStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,

  document.getElementById("app")
);
