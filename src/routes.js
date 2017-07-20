//import React from 'react';
import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './component/App';
import HomePage from './component/home/Home';
import AboutPage from "./component/about/AboutPage";
import signin from "./component/sign in/signin";

import BowuPage from "./component/bowu/BowuPage";
import SixuePage from "./component/sixue/SixuePage";
import ZhenguiPage from "./component/zhengui/ZhenguiPage";
import signup from "./component/sign up/signup";


const routes =(
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="about" component={AboutPage}></Route>
      <Route path="bowu" component={BowuPage}></Route>
      <Route path="sixue" component={SixuePage}></Route>
      <Route path="zhengui" component={ZhenguiPage}></Route>
      <Route path="signin" component={signin}></Route>
      <Route path="signup" component={signup}></Route>
    </Route>
  );
export default routes;
