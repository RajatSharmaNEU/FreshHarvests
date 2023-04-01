import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './components/App';
import { applyMiddleware, compose, createStore } from 'redux';

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root'));