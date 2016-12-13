/**
 *
 * Created by qoder on 16/12/13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import {observer, inject} from 'mobx-react';
const s = require('./index.scss');

interface TouchBackProps {
  target: string,
  children: any,
  touchBackStore: any
}

@inject('touchBackStore')
@observer
class TouchBack extends React.Component<TouchBackProps,void> {
  constructor(props) {
    super(props);
  }

  public _handTouchStart = (e): void=> {
    const {touchBackStore}=this.props;
    touchBackStore.handleTouchStart(e);
  }
  public _handleTouchEnd = (e): void=> {
    const {touchBackStore, target}=this.props;
    touchBackStore.handleTouchEnd(e, target);
  }

  public componentDidMount() {
    console.log(this.props)
  }

  public render() {
    return (
      <div onTouchStart={this._handTouchStart}
           onTouchEnd={this._handleTouchEnd}
           className={s.touchBackWrapper}>
        {this.props.children}
      </div>
    )
  }
}

export default TouchBack;
