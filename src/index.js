import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from 'store/'

import 'scss/index.scss';
import './index.css';

import InitState from 'components/initState/initState';
import { ToastContainer } from 'react-toastify';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Provider store={store}>
      <InitState/>
      <App route="/" />
    </Provider>
  </React.StrictMode>
)

/*
ReactDOM.render(
  <React.StrictMode>
      <ToastContainer/>
      <InitState/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
