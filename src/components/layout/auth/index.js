/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Login from './login';
import s from './index.scss';

export default class Auth extends Component{
  render(){
    return(
      <div>
        {this.props.children||<Login/>}
      </div>
    )
  }
}
