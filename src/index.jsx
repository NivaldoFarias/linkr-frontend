import ReactDOM from 'react-dom';
import React from 'react';
import App from './components';
import './css/reset.css';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root'),
);
