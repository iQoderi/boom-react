/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Navigator from '../../../plugins/navigator';
import s from './index.scss';

export default class Login extends Component{
  render(){
    return(
      <div>
        <Navigator to='/home' title="登录账号"/>
      </div>
    )
  }
}
