/**
 * Created by qoder on 16/12/12.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouterApp from './router.js';

const rootElement = document.getElementById('app');

ReactDOM.render(
  RouterApp(),
  rootElement
)
