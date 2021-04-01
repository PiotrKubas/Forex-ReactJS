import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainScreen from './screens/MainScreen/MainScreen'
import { store } from './store';
import { Provider } from 'react-redux';
require('dotenv').config();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainScreen />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
