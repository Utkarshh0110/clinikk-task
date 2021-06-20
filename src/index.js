import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serviceWorkerHandler from './serviceWorker'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerHandler()
