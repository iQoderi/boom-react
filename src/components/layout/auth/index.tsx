/**
 *
 * Created by qoder on 16/12/12.
 */
declare const require: any;
import * as React from 'react';
import Logo from '../../plugins/logo/index.ts';
import Login from './login';
const s = require('./index.scss');

class Auth extends React.Component<any,any> {
  render() {
    return (
      <div className={s.authWrapper}>
        <Logo/>
        {this.props.children||<Login/>}
      </div>
    )
  }
}

export default Auth;
