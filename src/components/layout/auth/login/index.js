/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React, {Component} from 'react';
import Navigator from '../../../plugins/navigator';
import {Link} from 'react-router';
import s from './index.scss';

class Login extends Component {
  _handleLogin = (e)=> {
    e.preventDefault();
  }

  render() {
    return (
      <div className={s.loginWrapper}>
        <Navigator title="登录账号"/>
        <form className={s.LoginForm}>
          <p className="topRadius">
            <input type="text" placeholder="请输入您的登录邮箱号" className="commonInput"/>
          </p>
          <p className="bottomRadius">
            <input type="text" placeholder="请输入您的密码" className="commonInput"/>
          </p>
          <p className={s.formButtonP}>
            <input
              onClick={this._handleLogin}
              type="submit" className="formButton" value="登录"/>
          </p>
        </form>
        <div className={s.formBottom}>
          <Link to="/auth/reActive">重新发送激活邮件</Link>
          <Link to="/auth/forgetPass">忘记密码?</Link>
        </div>
        <div className={s.registerButton}>
          <Link to="/auth/register">立即注册</Link>
        </div>
      </div>
    )
  }
}

export default  Login;
