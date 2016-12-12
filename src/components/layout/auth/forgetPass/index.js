/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React,{Component} from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import s from './index.scss';

class ForgetPass extends Component{
  render(){
    return(
      <div className={s.forgetPassWrapper}>
        <Navigator to="/auth/login" title="忘记密码"/>
        <form className={s.forgetPassForm}>
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

export default  ForgetPass;
