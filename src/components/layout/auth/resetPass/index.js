/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React, {Component} from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import s from './index.scss';

class ResetPass extends Component {
  render() {
    return (
      <div className={s.resetPassWrapper}>
        <Navigator to="/auth/forgetPass" title="重置密码"/>
        <form className={s.resetPassForm}>
          <p className="topRadius">
            <input type="password" placeholder="请输入您的新密码" className="commonInput"/>
          </p>
          <p className="bottomRadius">
            <input type="password" placeholder="请再输入您的新密码" className="commonInput"/>
          </p>
          <p className={s.formButtonP}>
            <input type="submit" className="formButton" value="重置密码"/>
          </p>
        </form>
      </div>
    )
  }
}

export default ResetPass;
