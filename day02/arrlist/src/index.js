import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App/>은 내가 작업하는 친구들을 모아서 여기에 inc해주는 친구
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') //어디에 버츄얼돔을 설치할거다 라는 부분
);
