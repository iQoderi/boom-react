/**
 *
 * Created by qoder on 16/12/12.
 */
import React from 'react';
import * as ReactDOM from 'react-dom';
import RouterApp from './router.ts';

const rootElement: HTMLElement = document.getElementById('app');

ReactDOM.render(
  RouterApp(),
  rootElement
)
