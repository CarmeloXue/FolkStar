import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './component/App';
import HomePage from './component/home/Home';
import AboutPage from "./component/about/AboutPage";

import BowuPage from "./component/bowu/BowuPage";
import SixuePage from "./component/sixue/SixuePage";
import ZhenguiPage from "./component/zhengui/ZhenguiPage";


const routes =(
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="about" component={AboutPage}></Route>
      <Route path="bowu" component={BowuPage}></Route>
      <Route path="sixue" component={SixuePage}></Route>
      <Route path="zhengui" component={ZhenguiPage}></Route>
    </Route>
  );
export default routes;
