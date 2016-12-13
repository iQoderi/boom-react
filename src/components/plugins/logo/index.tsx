/**
 * Created by qoder on 16/12/12.
 */

declare const require: any;
import * as React from 'react';
const s = require('./index.scss');

const Logo = ()=> {
  return (
    <div className={s.logoWrapper}>
      <div className={s.logoDom}/>
    </div>
  )
}

export default  Logo;
