/**
 * Created by qoder on 16/12/12.
 */
///<reference path='../typings/modules/react/index.d.ts'/>
///<reference path='../typings/modules/react-router/index.d.ts'/>
import * as React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/Main';
import Auth from './components/layout/auth';
import Login from './components/layout/auth/login';
import Register from './components/layout/auth/register';
import ForgetPass from './components/layout/auth/forgetPass';
import ReActive from './components/layout/auth/reActive';
import ResetPass from './components/layout/auth/resetPass';

import Home from './components/layout/home';

const RouterApp = ()=> {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/auth" component={Auth}>
                    <Route path="login" component={Login}/>
                    <Route path="register" component={Register}/>
                    <Route path="reActive" component={ReActive}/>
                    <Route path="forgetPass" component={ForgetPass}/>
                    <Route path="resetPass" component={ResetPass}/>
                </Route>
                <Route path="/home" component={Home}/>
            </Route>
        </Router>
    )
}

export default RouterApp;
