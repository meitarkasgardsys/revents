import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/App.css';
import App from './app/layout/App.jsx';
import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals';

const rootEL = document.getElementById('root');
const root = ReactDOM.createRoot(rootEL);

function render() {
  root.render(<App />);
}
 
if (module.hot){
  module.hot.accept('./app/layout/App.jsx',function() {
    setTimeout(render);
  })
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
