import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {CarritoContextProvider} from  './components/context/CarritoContext'

ReactDOM.render(
  <React.StrictMode>
    <CarritoContextProvider>
      <App />
    </CarritoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);