/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Navigator from '../../../plugins/navigator';
import s from './index.scss';

export default class ReActive extends Component{
  render(){
    return(
      <div className={s.reActiveWrapper}>
        <Navigator to="/auth/login" title="重新发送激活邮件"/>
        <form className={s.reActiveForm}>
          <p className="topRadius">
            <input type="text" placeholder="请输入您的登录邮箱号" className="commonInput"/>
          </p>
          <p className={s.formButtonP}>
            <input type="submit" className="formButton" value="发送邮件"/>
          </p>
        </form>
      </div>
    )
  }
}
