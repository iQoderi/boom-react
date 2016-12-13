/**
 * Created by qoder on 16-12-13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import Navigator from '../../../plugins/navigator/index.ts';
import {Link} from 'react-router'
const s = require('./index.scss');

class ReActive extends React.Component<any,any> {
    render() {
        return (
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

export default ReActive;
