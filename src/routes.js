import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './component/App';
import HomePage from './component/home/Home';
import AboutPage from "./component/about/AboutPage";

const routes =(
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="about" component={AboutPage}></Route>
    </Route>
  );
export default routes;
