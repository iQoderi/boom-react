/**
 *
 * Created by qoder on 16/12/12.
 */
declare const require: any;
import * as React from 'react'
const s = require('./index.scss');

interface LoadingProps {
  show: boolean
}

const Loading = ({show}:LoadingProps)=> {
  return (
    <div className={s.loading} style={{display:show?'block':'none'}}>
      <div className={s.spinner2}>
        <div className={s.spinnercontainer+" "+s.container1}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
          <div className={s.circle3}></div>
          <div className={s.circle4}></div>
        </div>
        <div className={s.spinnercontainer+" "+s.container2}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
          <div className={s.circle3}></div>
          <div className={s.circle4}></div>
        </div>
        <div className={s.spinnercontainer+" "+s.container3}>
          <div className={s.circle1}></div>
          <div className={s.circle2}></div>
          <div className={s.circle3}></div>
          <div className={s.circle4}></div>
        </div>
      </div>
      <span className={s.loadingword}>loading...</span>
    </div>
  )
}

export default Loading;
