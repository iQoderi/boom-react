/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';
import s from './index.scss';

const Navigator =({to,title})=>{
  return(
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
