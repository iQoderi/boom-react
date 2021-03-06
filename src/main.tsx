/**
 * Created by qoder on 16-12-13.
 */
///<reference path="../typings/modules/react/index.d.ts"/>
///<reference path="../typings/modules/react-dom/index.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import TouchBackStore from './stores/touchBackStore';
import UIStore from './stores/uiStore';
import authStore from './stores/authStore';
import RouterApp from './router';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <Provider
    authStore={authStore}
    touchBackStore={TouchBackStore}
    UIStore={UIStore}>
    {RouterApp()}
  </Provider>,
  rootElement
)
