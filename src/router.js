/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './components/Main';
import Auth from './components/layout/auth';
import Home from './components/layout/home';

const RouterApp=()=>{
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="auth" component={Auth}/>
        <Route path="home" component={Home}/>
      </Route>
    </Router>
  )
}

export default RouterApp;
