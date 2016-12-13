/**
 *
 * Created by qoder on 16/12/13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>

declare const require: any;
import * as React from 'react';
const s = require('./index.scss');

interface TouchBackProps {
    target?: string
}

interface TouchBackStates {
    startX: number,
    startY: number,
    endX: number,
    endY: number
}

class TouchBack extends React.Component<TouchBackProps,TouchBackStates> {
    constructor(props) {
        super(props);
        this.state = {
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0
        }
    }

    _handTouchStart = (e): void=> {
        console.log(e);
    }

    _handleTouchEnd = (e): void=> {
        console.log(e);
    }

    render() {
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