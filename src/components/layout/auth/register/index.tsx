/**
 * Created by qoder on 16-12-13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import TouchBack from '../../common/touchBack';
import {Link} from 'react-router'
const s = require('./index.scss');

class Register extends React.Component<any,any> {
    public render() {
        return (
            <div className={s.registerWrapper}>
                <TouchBack target="/auth/login">
                    <Navigator to="/auth/login" title="注册账号"/>
                    <form className={s.registerForm}>
                        <p className="topRadius">
                            <input type="text" placeholder="请输入您的昵称" className="commonInput"/>
                        </p>
                        <p className="centerRadius">
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
                </TouchBack>
            </div>
        )
    }
}

export default Register;
