/**
 *
 * Created by qoder on 16/12/12.
 */
import React from 'react';
import {render} from 'react-dom';
import RouterApp from './router.js';

const rootElement: HTMLElement = document.getElementById('app');

render(
  RouterApp(),
  rootElement
)
