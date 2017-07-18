import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './component/App';
import HomePage from './component/home/Home';
import AboutPage from "./component/about/AboutPage";

import CalligraphyPage from "./component/calligraphy/CalligraphyPage";
import HandCraftPage from "./component/handcraft/HandCraftPage";
import PaintingPage from "./component/painting/PaintingPage";


const routes =(
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="about" component={AboutPage}></Route>
      <Route path="calligraphy" component={CalligraphyPage}></Route>
      <Route path="painting" component={PaintingPage}></Route>
      <Route path="handcraft" component={HandCraftPage}></Route>
    </Route>
  );
export default routes;
