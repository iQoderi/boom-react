/**
 * Created by qoder on 16-12-13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import TouchBack from '../../common/touchBack';
const s = require('./index.scss');

class ResetPass extends React.Component<any,any> {
  render() {
    return (
      <div className={s.resetPassWrapper}>
        <TouchBack target="/auth/forgetPass">
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
        </TouchBack>
      </div>
    )
  }
}

export default ResetPass;
