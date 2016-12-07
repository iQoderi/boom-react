/**
 * Created by qoder on 16-12-7.
 */
'use strict';
import React from 'react';
import s from './index.scss';

const Tip=({tip})=>{
  return (
    <span className={s.TopTips}>
        {tip||'提示'}
      </span>
  )
}

export default  Tip;
