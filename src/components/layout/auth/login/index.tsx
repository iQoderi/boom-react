/**
 *
 * Created by qoder on 16-12-13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import {Link} from 'react-router'
const s = require('./index.scss');

class Login extends React.Component<any,any>{
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

export default Login;
