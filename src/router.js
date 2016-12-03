/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './components/Main';
import Auth from './components/layout/auth';
import Login from './components/layout/auth/login';
import Register from './components/layout/auth/register';
import ForgetPass from './components/layout/auth/forgetPass';
import ResetPass from './components/layout/auth/resetPass';
import ReActive from './components/layout/auth/reActive'


import Home from './components/layout/home';

const RouterApp=()=>{
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/auth" component={Auth}>
          <Route path="login" component={Login}/>
          <Route path="register" component={Register}/>
          <Route path="resetPass" component={ResetPass}/>
          <Route path="forgetPass" component={ForgetPass}/>
          <Route path="reActive" component={ReActive}/>
        </Route>
        <Route path="/home" component={Home}/>
      </Route>
    </Router>
  )
}

export default RouterApp;
