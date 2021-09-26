import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//yarn add react-router-dom
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode> {/* 경고창을 띄우는 친구 / 실배포시는 지움 */}
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
