/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Login from './login';
import Logo from '../../plugins/logo';
import s from './index.scss';

export default class Auth extends Component{
  render(){
    return(
      <div className={s.authWrapper}>
        <Logo/>
        {this.props.children||<Login/>}
      </div>
    )
  }
}
