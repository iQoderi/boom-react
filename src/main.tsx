/**
 * Created by qoder on 16-12-13.
 */
///<reference path="../typings/modules/react/index.d.ts"/>
///<reference path="../typings/modules/react-dom/index.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouterApp from './router';

const rootElement = document.getElementById('app');

ReactDOM.render(
  RouterApp(),
  rootElement
)
