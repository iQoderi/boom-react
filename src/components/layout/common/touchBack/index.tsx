/**
 *
 * Created by qoder on 16/12/13.
 */
///<reference path="../../../../../typings/modules/react/index.d.ts"/>
///<reference path="../../../../../typings/modules/react-router/index.d.ts"/>
declare const require: any;
import * as React from 'react';
import goto from '../../../../utils/goto';
const s = require('./index.scss');

interface TouchBackProps {
    target?: string
}

interface TouchBackStates {
    startX?: any,
    startY?: any,
    endX?: number,
    endY?: number
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

    public _handTouchStart = (e): void=> {
        const {clientX, clientY}=e.touches[0];
        this.setState({
            startX: clientX,
            startY: clientY
        })
    }
    public _handleTouchEnd = (e): void=> {
        const {clientX, clientY}=e.changedTouches[0];
        this.setState({
            endX: clientX,
            endY: clientY
        }, ()=> {
            const {startX, startY, endX, endY}=this.state;
            let minX = 100;
            let maxY = 50;
            let changX = endX - startX;
            let changY = Math.abs(endY - startY);
            if (changX > minX && changY < maxY) {
                goto(this.props.target);
            }
        })
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