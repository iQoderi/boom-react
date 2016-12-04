/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Navigator from '../../../plugins/navigator';
import {Link} from 'react-router';
import s from './index.scss';

class Register extends Component{
  render(){
    return(
      <div className={s.registerWrapper}>
        <Navigator to="/auth/login" title="注册账号"/>
        <form className={s.registerForm}>
          <p className="topRadius">
            <input type="text" placeholder="请输入您的登录邮箱号" className="commonInput"/>
          </p>
          <p className="bottomRadius">
            <input type="text" placeholder="请输入您的密码" className="commonInput"/>
          </p>
          <p className={s.formButtonP}>
            <input type="submit" className="formButton" value="立即注册"/>
          </p>
        </form>
        <div className={s.formBottom}>
          <Link to="/auth/login">已有账号?</Link>
        </div>
      </div>
    )
  }
}

export default Register;
