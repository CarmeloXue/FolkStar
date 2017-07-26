//import React from 'react';
import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './component/App';
import HomePage from './component/home/homePage';
import AboutPage from "./component/about/AboutPage";
import Signin from "./component/signIn/signInPage";
import BowuPage from "./component/bowu/BowuPage";
import SixuePage from "./component/sixue/SixuePage";
import ZhenguiPage from "./component/zhengui/ZhenguiPage";
import signup from "./component/signUp/signUpPage";


const routes =(
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="bowu" component={BowuPage}>/</Route>
      <Route path="sixue" component={SixuePage}/>
      <Route path="zhengui" component={ZhenguiPage}/>
      <Route path="signin" component={Signin}/>
      <Route path="signup" component={signup}/>
    </Route>
  );
export default routes;
