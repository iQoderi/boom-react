/**
 *
 * Created by qoder on 16/12/12.
 */
declare const require: any;
import * as React from 'react';
const s = require('./index.scss');

interface tip{
  show:boolean,
  content:string
}
interface TipProps {
  tip:tip
}


const Tip = ({tip}:TipProps)=> {
  return (
    <span className={s.TopTips} style={{display:tip.show?'inline-block':'none'}}>
        {tip.content || '提示'}
      </span>
  )
}

export default Tip;
