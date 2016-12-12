/**
 *
 * Created by qoder on 16/12/12.
 */
declare const require: any;
import * as React from 'react';
const s = require('./index.scss');

interface TipProps {
  tip: string,
}

const Tip = ({tip}:TipProps)=> {
  return (
    <span className={s.TopTips}>
        {tip || '提示'}
      </span>
  )
}

export default Tip;
