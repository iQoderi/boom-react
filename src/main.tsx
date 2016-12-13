/**
 * Created by qoder on 16-12-13.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouterApp from './router';

const rootElement: HTMLElement = document.getElementById('app');

ReactDOM.render(
  RouterApp(),
  rootElement
)
