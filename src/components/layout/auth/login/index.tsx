/**
 *
 * Created by qoder on 16-12-13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import {Link} from 'react-router';
import {observer, inject} from 'mobx-react';
import checkData from '../../../../utils/checkData';
import regex from '../../../../utils/regex';
const Promise = require('es6-promise');
const s = require('./index.scss');


@inject('authStore', 'UIStore')
@observer
class Login extends React.Component<any,any> {
  public _checkData = (body)=> {
    let {asyncHideTip}=this.props.UIStore;
    let copyBody = {
      email: {
        name: '邮箱',
        regex: regex.email,
        value: body.email
      },
      password: {
        name: '密码',
        regex: regex.password,
        value: body.password
      }
    }
    return new Promise((resolve)=> {
      let checkResult = checkData(copyBody);
      checkResult.then(()=> {
        resolve(body);
      }).catch((err)=> {
        asyncHideTip(err);
      })
    })
  }


  public _handleLogin = (e)=> {
    e.preventDefault();
    const {login}=this.props.authStore;
    const refs = this.refs as any;
    let {email, password}=refs;
    const body = {
      email: email.value,
      password: password.value
    }
    let result = this._checkData(body);
    result.then((data)=> {
      login(data);
    })
  }

  public render() {
    return (
      <div className={s.loginWrapper}>
        <Navigator title="登录账号"/>
        <form className={s.LoginForm}>
          <p className="topRadius">
            <input
              ref="email"
              type="text" placeholder="请输入您的登录邮箱号" className="commonInput"/>
          </p>
          <p className="bottomRadius">
            <input
              ref="password"
              type="password" placeholder="请输入您的密码" className="commonInput"/>
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
