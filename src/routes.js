//import React from 'react';
import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './component/App';
import HomePage from './component/home/homePage';
import AboutPage from "./component/about/AboutPage";
import signin from "./component/signIn/signInPage";

import BowuPage from "./component/bowu/BowuPage";
import SixuePage from "./component/sixue/SixuePage";
import ZhenguiPage from "./component/zhengui/ZhenguiPage";
import signup from "./component/signUp/signUpPage";


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
