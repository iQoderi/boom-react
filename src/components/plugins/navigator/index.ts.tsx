/**
 *
 * Created by qoder on 16/12/12.
 */

declare const require: any;
import * as  React from 'react';
const Link = require('react-router').Link;
const s = require('./index.scss');

interface NavigatorProps {
  to: string,
  title: string
}

const Navigator = ({to, title}:NavigatorProps)=> {
  return (
    <div className={s.navigatorWrapper}>
      <Link to={to} style={{display:to?'auto':'none'}}>
        <i className={s.back}/>
        <span>返回</span>
      </Link>
      <div className={s.title} style={{display:title?'block':'none'}}>
        {title}
      </div>
    </div>
  )
}

export default Navigator;
