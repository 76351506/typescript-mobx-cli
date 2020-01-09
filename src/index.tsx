/*
 * @Author: heinan 
 * @Date: 2020-01-09 10:00:25 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2020-01-09 10:00:25 
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import Store from '@/store';

ReactDom.render(
  <Provider {...Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
