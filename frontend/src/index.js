import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

ReactDOM.render( 
  <App/> ,
  document.getElementById('root')
);