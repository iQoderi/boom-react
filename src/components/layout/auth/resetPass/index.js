/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Navigator from '../../../plugins/navigator';
import s from './index.scss';

export default class ResetPass extends Component{
  render(){
    return(
      <div>
        <Navigator to="/auth/forgetPass" title="重置密码"/>
        ResetPass
      </div>
    )
  }
}
